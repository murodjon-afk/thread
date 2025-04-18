import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div className=" mx-auto  p-4  space-y-4 w-[100%] px-10">

      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src="https://source.unsplash.com/random/500x300"
            alt="Profile"
            fill
            className="rounded-full object-cover bg-gray-800"
          />
        </div>
        <div>
          <p className="font-semibold text-sm text-white">Barca . culer</p>
          <p className="text-xs text-gray-500">@handle · 2h</p>
        </div>
      </div>


       <h1 className="text-white ">ARS 2:1 RMA</h1>


      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src="https://i.ytimg.com/vi/T05vAOPmncY/sddefault.jpg"
          alt="Post"
          fill
          className="object-cover"
        />
      </div>


      <div className="flex justify-between text-gray-600 text-sm pt-2 text-white">
        <button className="flex items-center gap-1 hover:text-black">
          <span>24</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <span>8</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <span>3</span>
        </button>
        <button className="hover:text-black">
        </button>
      </div>

      <div className="pt-2 border-t text-sm text-gray-600">
        <p className="text-white">
          <span className="font-semibold text-gray-500">another_user</span> Реал мадрид вышел из игры лига чемпионов 
        </p>
      </div>
    </div>
  );
};

export default Post;
