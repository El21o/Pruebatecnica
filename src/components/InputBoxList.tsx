import React from "react";
import { HiPlus } from "react-icons/hi";
import UrlInput from "./UrlInput"; // Asegúrate de importar el nuevo componente

interface InputBox {
  id: number;
  url: string;
}

interface InputBoxListProps {
  inputBoxes: InputBox[];
  setInputBoxes: React.Dispatch<React.SetStateAction<InputBox[]>>;
  addInputBox: () => void;
}

const InputBoxList: React.FC<InputBoxListProps> = ({ inputBoxes, setInputBoxes, addInputBox }) => {
  const handleUrlChange = (url: string, isValid: boolean, index: number) => {
    const newBoxes = [...inputBoxes];
    newBoxes[index].url = url;
    setInputBoxes(newBoxes);
  };

  return (
    <div className="flex justify-center items-center mb-[20%] border-none">
      <div className="p-6 space-y-6 w-[679px] min-h-[204px]">
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            Add videos or folders
          </h4>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            These videos would be cut, labeled and made available in your Recharm video library
          </p>
        </div>

        {inputBoxes.map((box, index) => (
          <UrlInput
            key={box.id}
            value={box.url}
            onChange={(url, isValid) => handleUrlChange(url, isValid, index)}
            index={index}
            onRemove={() => setInputBoxes(inputBoxes.filter((_, i) => i !== index))}
          />
        ))}

        <div>
          <button
            className="w-[121px] h-[41px] rounded-[8px] flex justify-center items-center text-sm font-medium hover:text-purple-800 bg-white hover:bg-gray-50 border border-gray-300"
            onClick={addInputBox}
          >
            <span className="flex items-center">
              <span className="bg-purple-800 rounded-full p-0.5 mr-2.5">
                <HiPlus className="h-3 w-3 text-white" />
              </span>
              Add URL
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBoxList;
