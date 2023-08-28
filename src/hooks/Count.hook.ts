import { useState } from "react";

export function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment =
    (step = 1) =>
    () =>
      setCount((prevCount) => prevCount + step);

  const decrement = (step = 1) => increment(step * -1);

  return {
    count,
    increment,
    decrement,
  };
}
