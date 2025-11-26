import { Column as ColumnInterface, Task } from "@/types/interfaces";
import { useDroppable } from "@dnd-kit/core";
import SortableTask from "./Task";

interface props {
  column: ColumnInterface;
  tasks: Task[];
}

export default function Column({ column, tasks }: props) {
  const { setNodeRef } = useDroppable({
    id: column.id, // الـ id سيكون هدف السقوط
  });
  return (
    <div className={`flex flex-col gap-6 `}>
      <h2
        style={{ borderColor: column.color }}
        className={`border-t-4 bg-[#F1F5F980] rounded-xl p-4 font-bold text-lg text-[#020817] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]`}
      >
        {column.colTitle}
      </h2>
      <div
      ref={setNodeRef}
        className="flex flex-col gap-2 min-h-[100px]"
      >
          {tasks.map((task) => <SortableTask key={task.id} task={task}/>)}
      </div>
    </div>
  );
}
