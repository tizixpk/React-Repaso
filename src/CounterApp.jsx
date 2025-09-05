import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <button onClick={() => setCount(count + 1)}>➕</button>
    </div>
  );
}
