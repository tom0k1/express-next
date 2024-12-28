"use client";

import TodoInputForm from "@repo/ui/src/todo-input-form";
import { useEffect, useState } from "react";
import Skeleton from "@repo/ui/src/skeleton";
import Task from "@repo/ui/src/task";

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
    <div className="container">
      <h1 className="title">
        TODO <br />
        <span>アプリ</span>
      </h1>
      <Skeleton isLoaded={!!tasks} />
      {tasks &&
        tasks.map((task) => (
          <div>
            <Task taskName={task.name} dueDate={task.dueDate} />
          </div>
        ))}

      <TodoInputForm />
    </div>
  );
}
