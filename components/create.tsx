import React from "react";
import Image from 'next/image';

type ModalPostProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalPost: React.FC<ModalPostProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[#181818] rounded-2xl w-[500px] p-6 shadow-lg relative">
       
    <div className="w-[100%] border-b-2 boder-gray-400 flex items-center justify-between h-[50px]">
        <h1 className=" text-white hover:text-black text-xl">New Thread</h1>
    <button
          onClick={onClose}
          className="  text-gray-500 hover:text-black text-xl"
        >
       cansel
        </button>

    </div>
       
     
    <div className="flex items-start gap-4">
 
  <div className="relative w-12 h-12">
    <Image
      src="https://source.unsplash.com/random/500x300"
      alt="Profile"
      fill
      className="rounded-full object-cover bg-gray-800"
    />
  </div>


  <input
    className="flex-1 h-[50px] border-b-2 border-gray-600 rounded-lg p-3 text-sm bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
    placeholder="What’s new?"
    aria-label="Новое сообщение"
  />
</div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 text-sm"
          >
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
