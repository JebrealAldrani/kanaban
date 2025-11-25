import { Column as ColumnInterface } from "@/types/interfaces";
import { useDroppable } from "@dnd-kit/core";

interface props {
    column: ColumnInterface;
    children: React.ReactNode;
}

export default function Column({ column, children }: props) {

    const { setNodeRef } = useDroppable({
    id: column.id, // الـ id سيكون هدف السقوط
  });
  return (
    <div ref={setNodeRef} className={`flex flex-col gap-6 `}>
       <h2 style={{borderColor: column.color}} className={`border-t-4 bg-[#F1F5F980] rounded-xl p-4 font-bold text-lg text-[#020817] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]`}>{column.colTitle}</h2>
      <div dir="ltr" className="flex flex-col gap-2 max-h-[500px] overflow-y-auto "><div dir="rtl" className="flex flex-col gap-4">{children}</div></div> 
    </div>
  );
}