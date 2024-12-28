"use client";

import TodoInputForm from "@repo/ui/src/todo-input-form";
import { useEffect, useState } from "react";
import Skeleton from "@repo/ui/src/skeleton";
import Task from "@repo/ui/src/task";
import { Switch } from "@nextui-org/react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";

export default function TopPage(): JSX.Element {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL!}/todo/list`
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container w-screen h-screen">
      <h1 className="title">
        <div className="h-[40rem] flex items-center justify-center">
          <TextHoverEffect text="TODO" />
        </div>
      </h1>
      <Skeleton isLoaded={!!tasks} />
      {tasks && (
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          {tasks.map((task) => (
            <Task taskName={task.name} dueDate={task.dueDate} />
          ))}
        </div>
      )}

      <TodoInputForm />
    </div>
  );
}
