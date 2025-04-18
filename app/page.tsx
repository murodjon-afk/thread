'use client';


import Image from "next/image";
import Post from "@/components/posts";



export default function Home() {

  return (
   <>
   <div className="h-[100vh] w-[100%]  flex items-center justify-center flex-col">
    <h1 className="text-white pt-3 pb-2">For you</h1>
   <div className="h-[100%] w-[40%] bg-[#181818]  rounded-t-[10px] overflow-auto scrollbar-none pb-5">
     <div className="px-3 w-[100%] h-20  flex items-center justify-between px-7">

     <Image
      src=""
      alt="Home"
      width={24}
      height={24}
      className="w-[60px] h-[60px] rounded-full bg-gray-700"

    />  
      <h1 className="w-[90%] pl-5 h-[100%] flex items-center cursor-text text-white">Whats new ?</h1>

      <button className="w-20 h-10 bg-[#181818] text-white border rounded-[10px] cursor-pointer">Post</button>
    
       </div>
        <div className="flex gap-5 flex-col">
        <Post></Post>
        <Post></Post>
        <Post></Post>

        </div>


       


     </div>
   </div>
   </>
  );
}
