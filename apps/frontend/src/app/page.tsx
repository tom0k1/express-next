"use client";

import Skeleton from "@repo/ui/src/skeleton";
import { useEffect, useState } from "react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

export default function TopPage(): JSX.Element {
  const [tasks, setTasks] = useState();

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
      <Skeleton />
      <div className="flex gap-x-4">
        <Calendar aria-label="Date (No Selection)" />
        <Calendar
          aria-label="Date (Uncontrolled)"
          defaultValue={parseDate("2020-02-03")}
        />
      </div>
    </div>
  );
}
