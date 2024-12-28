import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import React from "react";

export default function App({
  taskName,
  dueDate,
}: {
  taskName: string;
  dueDate?: Date;
}) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{taskName}</p>
          <p className="text-small text-default-500">{dueDate?.toString()}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Button color="success">完了</Button>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button color="primary">コピー</Button>
      </CardFooter>
    </Card>
  );
}
