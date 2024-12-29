"use client";

import TodoInputForm from "@repo/ui/src/todo-input-form";
import { useEffect, useState } from "react";
import Task from "@repo/ui/src/task";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

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
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Todo</h1>
      <TodoInputForm />
      {tasks && (
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 p-4">
          {tasks.map((task, index) => (
            <Task key={index} taskName={task.name} dueDate={task.dueDate} />
          ))}
        </div>
      )}
    </div>
  );
}
