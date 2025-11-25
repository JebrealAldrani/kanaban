"use client";

import { useState } from "react";
import { TASKS } from "@/static/data";
import { Column as ColumnInterface, Task } from "@/types/interfaces";

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from "@dnd-kit/core";

import Column from "./Column";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableTask from "./SortableTask";

const TasksList = () => {
  const [board, setBoard] = useState<ColumnInterface[]>(TASKS);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeOver, setActiveOver] = useState<{ columnId: string; taskIndex?: number } | null>(null);


  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const task = board
      .flatMap((col) => col.tasks)
      .find((t) => t.id === active.id);

    setActiveTask(task || null);
  };

const handleDragOver = (event: DragOverEvent) => {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  // إذا سقط على عمود (over.id هو عمود)
  const columnOver = board.find((col) => col.id === overId);
  if (columnOver) {
    setActiveOver({ columnId: columnOver.id });
    return;
  }

  // إذا سقط على مهمة داخل عمود
  const targetColumn = board.find((col) => col.tasks.some((t) => t.id === overId));
  if (!targetColumn) return;

  const targetTaskIndex = targetColumn.tasks.findIndex((t) => t.id === overId);

  setActiveOver({ columnId: targetColumn.id, taskIndex: targetTaskIndex });
};



  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id; // id المهمة المسحوبة
    const overId = over.id; // id الهدف (ممكن يكون عمود أو مهمة)

    setBoard((prevBoard) => {
      const newBoard = structuredClone(prevBoard); // نسخ البورد لتعديله

      // إيجاد العمود الذي تحتويه المهمة المسحوبة
      const fromColumnIndex = newBoard.findIndex((col) =>
        col.tasks.some((t) => t.id === activeId)
      );
      if (fromColumnIndex === -1) return prevBoard;

      const fromColumn = newBoard[fromColumnIndex];

      // إيجاد المهمة نفسها
      const taskIndex = fromColumn.tasks.findIndex((t) => t.id === activeId);
      const task = fromColumn.tasks[taskIndex];

      // إزالة المهمة من العمود الأصلي
      fromColumn.tasks.splice(taskIndex, 1);

      // الآن نحدد العمود الهدف
      const toColumnIndex = newBoard.findIndex((col) => col.id === overId);

      if (toColumnIndex !== -1) {
        // إذا سقطت على عمود (Drop على العمود نفسه)
        newBoard[toColumnIndex].tasks.push({
          ...task,
          ColId: newBoard[toColumnIndex].id,
        });
      } else {
        // إذا سقطت على مهمة داخل عمود آخر
        const targetColumnIndex = newBoard.findIndex((col) =>
          col.tasks.some((t) => t.id === overId)
        );

        if (targetColumnIndex !== -1) {
          const targetColumn = newBoard[targetColumnIndex];
          const targetTaskIndex = targetColumn.tasks.findIndex(
            (t) => t.id === overId
          );

          // أدخل المهمة قبل المهمة الهدف
          targetColumn.tasks.splice(targetTaskIndex, 0, {
            ...task,
            ColId: targetColumn.id,
          });
        } else {
          // fallback: إعادة المهمة للعمود الأصلي
          fromColumn.tasks.splice(taskIndex, 0, task);
        }
      }

      return newBoard;
    });

    setActiveTask(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {board.map((column) => (
          <Column key={column.id} column={column}>
            <SortableContext
              items={column.tasks.map((t) => t.id)}
              strategy={verticalListSortingStrategy}
            >
              {column.tasks.map((task) => (
                <SortableTask key={task.id} task={task} />
              ))}
            </SortableContext>
          </Column>
        ))}
      </div>
    </DndContext>
  );
};

export default TasksList;
