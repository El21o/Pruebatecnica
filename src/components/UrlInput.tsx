import React, { useEffect, useState } from "react";
import { TextInput } from "flowbite-react";
import isUrl from 'is-url';
import { HiTrash } from "react-icons/hi";

interface UrlInputProps {
  value: string;
  onChange: (url: string, isValid: boolean) => void;
  index: number;
  onRemove: () => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ value, onChange, index, onRemove }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const valid = isUrl(url);
    setIsValid(valid);
    onChange(url, valid);
  };

  useEffect(() => {
    setIsValid(isUrl(value));
  }, [value]);

  return (
    <div className="flex items-center mb-2 relative">
      <div className="relative flex-grow">
        <span className="text-sm text-gray-700 dark:text-gray-400 mr-2">
          Video/Folder {index + 1} URL
        </span>
        <TextInput
          className={`border rounded-lg transition ${
            isValid ? 'border-gray-300 text-gray-900' : 'border-red-500 text-red-600'
          }`}
          placeholder="http://drive.google.com/some-link"
          value={value}
          onChange={handleChange}
        />
        <button
          type="button"
          className="mt-3 absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-8 w-8"
          onClick={onRemove}
        >
          <span className="flex items-center justify-center">
            <HiTrash className="h-4 w-4 opacity-50 text-gray-600" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default UrlInput;
