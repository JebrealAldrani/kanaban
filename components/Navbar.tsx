"use client";

import { Bell, MessageSquare } from "lucide-react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  // const {toggleSidebar} = useSidebar()
  return (
    <nav
      dir="ltr"
      className="py-4 px-4 lg:px-[80px] flex gap-4 items-center justify-between md:justify-start sticky top-0 bg-background z-10 border-b border-b-[#E2E8F0]"
    >
      
      <div className="flex gap-4 items-center justify-start">
        <Image src="/images/avatar.png" width={40} height={40} alt="avatar" />
        <MessageSquare />
        <div
          className="
    relative 
    before:content-['3'] 
    before:absolute 
    before:-top-1 
    before:-left-1
    before:flex 
    before:items-center 
    before:justify-center 
    before:w-4 
    before:h-4 
    before:text-[10px]
    before:text-white 
    before:bg-[#217BA9] 
    before:rounded-full
  "
        >
          <Bell className="w-6 h-6" />
        </div>

        <SearchBar />
      </div>

      <SidebarTrigger className="block md:hidden" />
    </nav>
  );
};

export default Navbar;
