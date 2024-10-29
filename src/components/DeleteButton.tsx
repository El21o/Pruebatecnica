import React from "react";
import { HiTrash } from "react-icons/hi";

interface DeleteButtonProps {
  onClick: () => void; // Función que se llamará al hacer clic en el botón
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button
      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#F9FAFB] p-1 rounded-full border border-gray-300"
      onClick={onClick}
    >
      <HiTrash className="w-5 h-5 text-gray-900 opacity-50" />
    </button>
  );
};

export default DeleteButton;
