"use client";

import React from "react";
import { DatePicker, Form } from "@nextui-org/react";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitted, setSubmitted] = React.useState<any>(null);
  const { isOpen: isConfirmationModalOpen, onClose: onConfirmationModalClose } =
    useDisclosure({
      isOpen: submitted,
      onClose: () => setSubmitted(false),
    });

  const [dueDate, setDueDate] = React.useState<any>(null);

  const defaultOptions = {
    loop: false,
    autoplay: submitted,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onSubmit = (e: any, onClose: any) => {
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

        return true;
        // if (response.ok) {
        //   return true;
        // }
      } catch (error) {
        console.error("Fetching data failed", error);
      }
      return false;
    };

    addTask().then((r) => {
      console.log(r);
      if (r) {
        setSubmitted(data);
        onClose();
      }
    });
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        タスクを登録する
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <Form onSubmit={(e) => onSubmit(e, onClose)}>
              <ModalHeader className="flex flex-col gap-1">
                タスクを登録する
              </ModalHeader>
              <ModalBody>
                <div className="w-full max-w-xs relative flex flex-col gap-5">
                  <Input
                    isRequired
                    name="taskName"
                    errorMessage="タスク名を入力してください"
                    label="タスク名"
                    labelPlacement="outside"
                    placeholder="例: ジムに行く"
                    type="text"
                  />
                  <DatePicker
                    className="max-w-[284px]"
                    label="期日"
                    value={dueDate}
                    onChange={setDueDate}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  閉じる
                </Button>
                <Button type="submit" color="primary">
                  登録
                </Button>
              </ModalFooter>
            </Form>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={onConfirmationModalClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="relative">
                <div className={`absolute -bottom-25 right-0 block`}>
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
              </div>
              <ModalHeader className="flex flex-col gap-1">
                タスクを登録しました 🎉 成長の第一歩です。
              </ModalHeader>
              <ModalBody>
                <p>タスクが完了したら「完了」ボタンを押しましょう。</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  分かった
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
