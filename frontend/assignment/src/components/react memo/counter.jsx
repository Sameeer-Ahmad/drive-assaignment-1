import { useState } from "react";
import MemoizedComponent from "./memo";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedComponent text={text} />
      <button onClick={() => setText("Updated Text")}>Update Text</button>
    </div>
  );
}

export default Counter;
