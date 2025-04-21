'use client';

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import ModalPost from '@/components/create';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const buttons = ['/home.svg', '/search.svg', '/activiti.svg', '/like.svg', '/profile'];

  const handleButtonClick = (src: string) => {
    if (src === '/activiti.svg') {
      setOpen(true);
    } else if (src === '/profile') {
      // handled by SignedOut modal
    } else {
      setActiveButton(src);
      if (src === '/home.svg') window.location.href = '/';
      if (src === '/search.svg') window.location.href = '/search';
      if (src === '/like.svg') window.location.href = '/likes';
    }
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Главная . Threads</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Описание сайта" />
          <meta name="theme-color" content="#181818" />
        </head>
        <body>
          <div className="flex min-h-screen">
            <aside className="w-20 bg-black p-4 flex flex-col items-center justify-between py-5">
              <Link href={'/'}>
                <Image src="/Threads.svg" alt="Threads Icon" width={30} height={30} />
              </Link>
              <nav className="flex flex-col gap-2 items-center">
                {buttons.map((src, idx) => (
                  <div key={idx}>
                    {src === '/profile' ? (
                      <>
                        <SignedIn>
                          <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                          <SignInButton mode="modal">
                            <button className="hover:scale-110 hover:bg-[#181818] transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-[60px] h-[50px] rounded-[10px] flex items-center justify-center p-1">
                              <Image src="/profile.svg" alt="Sign In" width={35} height={35} />
                            </button>
                          </SignInButton>
                        </SignedOut>
                      </>
                    ) : (
                      <button
                        className={`hover:scale-110 hover:bg-[#181818] transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-[60px] h-[50px] rounded-[10px] flex items-center justify-center p-1 ${activeButton === src ? 'bg-[#333]' : ''}`}
                        onClick={() => handleButtonClick(src)}
                      >
                        <Image src={src} alt="Icon" width={35} height={35} />
                      </button>
                    )}
                  </div>
                ))}
              </nav>


              
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hover:scale-110 transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full p-1">
                      <Image src="/secure.svg" alt="Secure Icon" width={35} height={35} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#181818] text-white border border-gray-700 w-[350px] h-[450px] pl-3 pr-3 pt-3">
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white h-[50px] text-xl">Для вас</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white  h-[50px] text-xl">Подписки</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white  h-[50px] text-xl">Вы поставили нравиться</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white h-[50px] text-xl ">Сохряненые</DropdownMenuItem>
                    <DropdownMenuItem className=" hover:text-red-500 hover:bg-[#212121] h-[50px] text-xl">Поиск</DropdownMenuItem>
                    <DropdownMenuItem className=" hover:text-red-500 hover:bg-[#212121] h-[50px] text-xl">Действия</DropdownMenuItem>
                    <DropdownMenuItem className=" hover:text-red-500 hover:bg-[#212121] h-[50px] text-xl">Профиль</DropdownMenuItem>
                    <DropdownMenuItem className=" hover:text-red-500 hover:bg-[#212121] h-[50px] text-xl">Статистика</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hover:scale-110 transition-transform duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full p-1">
                      <Image src="/group.svg" alt="Group Icon" width={35} height={35} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#181818] text-white border border-gray-700 w-[300px] h-[300px] pl-3 pr-3 pt-3">
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white h-[50px] text-xl">Внешный вид</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white  h-[50px] text-xl">Статистика</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white  h-[50px] text-xl">Настройки</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem className="hover:bg-[#212121] hover:text-white h-[50px] text-xl ">Сообщить о проблеме</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400 hover:text-red-500 hover:bg-[#212121] h-[50px] text-xl">Выйти</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
        
            </aside>

            <main className="flex-1 pt-10 w-full h-screen bg-black flex items-end justify-center">
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
    </ClerkProvider>
  );
}
