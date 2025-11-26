"use client";

import { Column as ColumnInterface, Task } from "@/types/interfaces";
import { COLUMNS } from "@/static/data";

import { DndContext, DragEndEvent, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";

import Column from "./Column";

interface TasksListProps {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TasksList = ({tasks, setTasks}: TasksListProps) => {


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as number;
    const newStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  
  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
  );

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
          />
        ))}
      </DndContext>
    </div>
  );
};

export default TasksList;
