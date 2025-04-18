'use client';

import "./globals.css";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import ModalPost from "@/components/create";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false); 
  const [activeButton, setActiveButton] = useState<string | null>(null); 

  const handleButtonClick = (src: string) => {
    if (src === '/activiti.svg') {
      setOpen(true); 
    } else {
      setActiveButton(src); 
    }


    if (src === '/home.svg') {
      window.location.href = '/';

    } else {
      setActiveButton(src); 
    }


    if (src === '/search.svg') {
      window.location.href = '/search';

    } else {
      setActiveButton(src); 
    }


    if (src === '/like.svg') {
      window.location.href = '/likes';

    } else {
      setActiveButton(src); 
    }
  };

  return (
    <html lang="en">
      <body >
        <div className="flex min-h-screen">
          <aside className="w-20 bg-black p-4 flex flex-col items-center justify-between py-5">
            <Link href={'/'}>
              <Image src="/Threads.svg" alt="Threads Icon" width={30} height={30} />
            </Link>
            <nav className="flex flex-col gap-2">
              {['/home.svg', '/search.svg', '/activiti.svg', '/like.svg', '/profile.svg'].map((src, idx) => (
                <button
                  key={idx}
                  className={`hover:scale-110 hover:bg-[#181818] transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-[60px] h-[50px] rounded-[10px] flex items-center justify-center p-1 ${activeButton === src ? 'bg-[#333]' : ''}`} // Выделяем активную кнопку
                  onClick={() => handleButtonClick(src)} 
                >
                  <Image src={src} alt="Icon" width={35} height={35} />
                </button>
              ))}
            </nav>

            <div>
            <DropdownMenu>
  <DropdownMenuTrigger>
    {['/secure.svg', '/group.svg'].map((src, idx) => (
      <button
        key={idx}
        className="hover:scale-110 transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full p-1"
      >
        <Image src={src} alt="Icon" width={35} height={35} />
      </button>
    ))}
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </div>
          </aside>

          <main className="flex-1 pt-10 w-[100%] h-[100vh] bg-black flex items-end justify-center">
            {children}
          </main>

          <button
            className="fixed bottom-4 bg-[#181818] right-4 hover:scale-110 transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 p-1 h-18 w-20 flex items-center justify-center rounded-[10px]"
            onClick={() => setOpen(true)} 
          >
            <Image src="/activiti.svg" alt="Activity Icon" width={35} height={35} />
          </button>

          <ModalPost isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </body>
    </html>
  );
}
