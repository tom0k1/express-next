import React from "react";
import { Button, DatePicker, Form, Input } from "@nextui-org/react";

export default function App() {
  const [submitted, setSubmitted] = React.useState<any>(null);
  const [dueDate, setDueDate] = React.useState<any>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    data.append("dueDate", dueDate);

    const addTask = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL!}/todo/create`,
          {
            method: "POST",
            body: data,
          }
        );
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    };

    addTask();

    setSubmitted(data);
  };

  return (
    <Form
      className="w-full max-w-xs"
      validationBehavior="native"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        errorMessage="タスク名を入力してください"
        label="タスク名"
        labelPlacement="outside"
        name="task_name"
        placeholder="例: ジムに行く"
        type="text"
      />
      <DatePicker
        className="max-w-[284px]"
        label="期日"
        value={dueDate}
        onChange={setDueDate}
      />
      <Button type="submit" variant="bordered">
        登録
      </Button>
      {submitted && (
        <div className="text-small text-default-500">登録しました</div>
      )}
    </Form>
  );
}
