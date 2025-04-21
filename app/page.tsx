'use client';

import Image from "next/image";
import Post from "@/components/posts";
import { useState } from "react";
import ModalPost from "@/components/create";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-[100vh] w-[100%] flex items-center justify-center flex-col">
        <h1 className="text-white pt-3 pb-2">For you</h1>
        <div className="h-[100%] w-[40%] bg-[#181818] rounded-t-[10px] overflow-auto scrollbar-none pb-5">
          <div className="px-3 w-[100%] h-20 flex items-center justify-between px-7 border-b-1 border-gray-500">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

       
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-[60px] h-[60px] rounded-full bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/profile.svg"
                    alt="Sign In"
                    width={30}
                    height={30}
                  />
                </button>
              </SignInButton>
            </SignedOut>

            <h1
              className="w-[90%] pl-5 h-[100%] flex items-center cursor-text text-white"
              onClick={() => setOpen(true)}
            >
              Whats new?
            </h1>

            <button
              className="w-20 h-10 bg-[#181818] text-white border rounded-[10px] cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Post
            </button>
          </div>

          <div className="flex gap-5 flex-col">
            <Post />
          </div>

          <ModalPost isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}
