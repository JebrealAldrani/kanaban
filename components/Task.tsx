import { Task as taskInterface } from "@/types/interfaces";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Tajawal } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Calendar,
  MessageSquare,
  MoreHorizontal,
  MoreVertical,
  Paperclip,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useDraggable } from "@dnd-kit/core";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"], // Tajawal supports Arabic and Latin
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Task({ task }: { task: taskInterface }) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined

  const employeeName = task.empName === "1" ? 'محمد' : task.empName === '2' ? 'سالم' : 'نور'

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="cursor-grab px-2 py-2 flex flex-col gap-4 border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#0000000D] rounded-xl"
    >
      {/* Row 1 */}
      <div className="flex items-start justify-between">
        <div className="flex items-start justify-between flex-1">
          <h4
            className={`${tajawal.variable} text-[#020817] text-[16px] font-medium font-tajawal max-h-12 h-12`}
          >
            {task.title}
          </h4>
          <Badge
            className={`${
              task.priority === "1"
                ? "bg-[#F9731633]"
                : task.priority === "2"
                ? "bg-[#F59E0B33]"
                : "bg-[#22C55E33]"
            } ${
              task.priority === "1"
                ? "text-[#C2410C]"
                : task.priority === "2"
                ? "text-[#B45309]"
                : "text-[#15803D]"
            } rounded-full py-1 px-2`}
          >
            {task.priority === '1' ? 'عالية' : task.priority === '2' ? 'متوسطة' : 'منخفض'}
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>التحكم</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>حذف</DropdownMenuItem>

            <DropdownMenuItem>تعديل</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Row 2 */}
      <p className="pt-2 text-[#64748B] text-sm max-h-10 h-10">{task.desc}</p>

      {/* Row 3 */}
      <p className="text-[#64748B] text-xs">{task.department}</p>

      {/* Row 4 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar width={12} height={12} />
          <span className="text-[#64748B] text-xs">{task.endDate}</span>
        </div>

        {/* Links & Messages */}
        <div className="flex items-center gap-3 text-[#64748B]">
          {/* Links */}
          {task.links !== 0 && (
            <div className="flex items-center gap-1">
              <Paperclip width={12} height={12} />
              <span className="text-xs">{task.links}</span>
            </div>
          )}

          {/* Messages */}
          {task.messages !== 0 && (
            <div className="flex items-center gap-1">
              <MessageSquare width={12} height={12} />
              <span className="text-xs">{task.links}</span>
            </div>
          )}
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex items-center justify-between">
        <span className="text-[#020817] text-xs font-medium">
          {employeeName}
        </span>
        <span className="w-6 h-6 rounded-full p-2 flex items-center justify-center bg-[#182B49] text-white text-xs">
          {employeeName[0]}
        </span>
      </div>
    </div>
  );
}
