import { CounterButton } from "@repo/ui/counter-button";

export const metadata = {
  title: "Todo App",
};

export default function TopPage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="title">
        TODO <br />
        <span>アプリ</span>
      </h1>
      <CounterButton />
    </div>
  );
}
