import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import InputBoxList from "./InputBoxList"; 

interface InputBox {
  id: number;
  url: string;
}

export function CreateRequestMainComponent() {
  const [inputBoxes, setInputBoxes] = useState<InputBox[]>([{ id: 1, url: "" }]);

  const validateURL = (url: string) => {
    const regex = /^(http|https):\/\/drive\.google\.com\/.*$/; // Regex para validar el formato de la URL
    return regex.test(url);
  };

  
  const addInputBox = () => {
    if (inputBoxes.length < 10) {
      setInputBoxes([...inputBoxes, { id: inputBoxes.length + 1, url: "" }]);
    }
  };

 
  const handleCreateRequest = () => {
    const invalidUrls = inputBoxes.filter(box => !validateURL(box.url));
    if (invalidUrls.length > 0) {
      alert("Por favor, ingrese URLs válidas de Google Drive.");
      return;
    }

    const requestData = inputBoxes.map((box) => ({
      url: box.url,
      value: box.url.split('/').pop() 
    }));

    alert(JSON.stringify(requestData, null, 2)); 
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-2 border-b rounded-t">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-extrabold">
          Create New Request
        </h3>
        <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          {/* Aquí podrías agregar un ícono de cierre si es necesario */}
        </button>
      </div>

      <InputBoxList 
        inputBoxes={inputBoxes} 
        setInputBoxes={setInputBoxes} 
        addInputBox={addInputBox} 
      />
      
      <div className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
        <Button 
          color="primary" 
          className="text-white text-sm font-medium bg-purple-700 hover:bg-purple-800 w-[166px] h-[41px]"
          onClick={handleCreateRequest} 
        >
          + Create Request
        </Button>
      </div>
    </div>
  );
}
