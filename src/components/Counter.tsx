import { Button } from "@app/components";
import { useCount } from "@app/hooks";

export const Counter = () => {
  const { count, increment, decrement } = useCount(0);

  return (
    <div className="flex flex-row items-center gap-5">
      <Button onClick={decrement()}>-</Button>
      <div className="text-5xl">{count}</div>
      <Button onClick={increment()}>+</Button>
    </div>
  );
};
