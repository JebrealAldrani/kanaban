'use client'

import AddTask from "@/components/AddTask";
import FiltersList from "@/components/FiltersList";
import InfoCardsList from "@/components/InfoCardsList";
import TasksList from "@/components/TasksList";
import { SheetTrigger, Sheet } from "@/components/ui/sheet";
import { TASKS } from "@/static/data";
import { Task } from "@/types/interfaces";
import {
  CirclePlus,
  LayoutDashboard,
  TableProperties,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {

    const [tasks, setTasks] = useState<Task[]>(TASKS);
    const [open, setOpen] = useState<boolean>(false);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname()
    
    const selectedCategory = searchParams.get('category') || '';
  console.log(selectedCategory)

    const handleButtonClick = (category: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('category', category || '')
      router.push(`${pathname}?${params.toString()}`, {scroll: false})
    }
  return (
    <div className="px-4 lg:px-[80px] py-8 flex flex-col gap-6">
      <div className="flex justify-between">
        {/* Header Title */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#182B49] font-bold text-[30px]">المهام</h1>
          <p className="text-[#64748B] text-sm font-normal">
            إدارة وتتبع جميع المهام
          </p>
        </div>

        {/* Add Task Button */}
        <div className="flex flex-col md:flex-row gap-3 text-[#020817] font-medium items-center justify-center ">
          <div className="p-1 bg-[#F1F5F9] rounded-xl flex gap-2 h-fit">
            <button onClick={() => handleButtonClick('kanaban')} className={` flex gap-2 no-wrap items-center justify-center h-fit rounded-[6px] py-1 px-3 cursor-pointer
              ${selectedCategory === 'kanaban' || !selectedCategory ? 'bg-white': ''}`}>
              <LayoutDashboard width={16} height={16} />
              <span>كانبان</span>
            </button>
            <button onClick={() => handleButtonClick('table')} className={` flex gap-2 no-wrap items-center justify-center h-fit rounded-[6px] py-1 px-3 cursor-pointer
              ${selectedCategory === 'table' ? 'bg-white': ''}`}>
              <TableProperties width={16} height={16} />
              <span>جدول</span>
            </button>
          </div>

          {/* Add Task Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex gap-2 items-center justify-center h-fit py-2 px-3 bg-[#182B49] text-white rounded-[6px] cursor-pointer">
                <CirclePlus width={20} height={20} />
                <span className="font-medium text-[16px]">مهمة جديدة</span>
              </button>
            </SheetTrigger>
            <AddTask setTasks={setTasks} setOpen={setOpen}/>
          </Sheet>
        </div>
      </div>

      {/* Information Cards List */}
      <InfoCardsList />

      {/* Filters List */}
      <FiltersList />

      {/* Task List Component Enable Drag And Drop Tasks */}
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
