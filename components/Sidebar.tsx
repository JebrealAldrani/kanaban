import {
  Home,
  Inbox,
  Calendar,
  Search,
  User2,
  ChevronUp,
  Plus,
  Shirt,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { MENU_ITEMS_1, MENU_ITEMS_2 } from "@/static/data";

const items = [
  {
    title: "الرئيسية",
    url: "/",
    icon: Home,
  },
  {
    title: "الرسائل الواردة",
    url: "#",
    icon: Inbox,
  },
  {
    title: "المواعيد",
    url: "#",
    icon: Calendar,
  },
  {
    title: "بحث",
    url: "#",
    icon: Search,
  },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="[&_*::-webkit-scrollbar]:hidden [&_*]:[-ms-overflow-style:'none'] [&_*]:[scrollbar-width:'none']">
      <SidebarHeader className="py-4">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[#C9B57A] font-bold text-[18px]">TechTeek</h2>
            <p className="font-normal text-[12px] text-[#BFC6D5]">نظام إدارة المشاريع</p>
          </div>
          <span className="w-10 h-10 rounded-full bg-[#C9B57A]"></span>
        </div>
      </SidebarHeader>

      <SidebarContent>

        <div className="p-1 border border-[#288EC7] flex gap-3 mx-2 rounded-2xl bg-[#288EC71F] text-[14px] font-medium w-fit self-center">
          <button className="py-2 px-4 bg-[#288EC7] shadow-[0px_4px_14px_0px_#288EC740] rounded-[12px] text-[#0F1B31] cursor-pointer">إدارة المشاريع</button>
          <button className="text-[#288EC7D9] py-2 px-4 rounded-[12px] transition-all duration-300 hover:text-[#0F1B31] hover:bg-[#288EC7] hover:shadow-[0px_4px_14px_0px_#288EC740] cursor-pointer">إدارة التذاكر</button>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU_ITEMS_1.map((item) => (
                <SidebarMenuItem key={item.title} className={`font-normal text-[15px] rounded-[12px] ${item.title === 'المهام' ? 'bg-[#288EC726]' : '' }`}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon width={20} height={20} className="text-[#288EC7]"/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  
                    <SidebarMenuBadge><ChevronRight width={16} height={16} className={item.title === 'المهام' ? 'text-white': 'text-[#288EC7]'}/></SidebarMenuBadge>
                  
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#288EC7]">الإعدادات العامة</SidebarGroupLabel>
          <SidebarGroupAction>
            {/* <Plus /> */}
            <span className="sr-only">إضافة عيادة</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU_ITEMS_2.map((item) => (
                <SidebarMenuItem key={item.title} className={`font-normal text-[15px] rounded-[12px]`}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon width={20} height={20} className="text-[#288EC7]"/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  
                    <SidebarMenuBadge><ChevronRight width={16} height={16} className="text-[#288EC7]"/></SidebarMenuBadge>
                  
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
