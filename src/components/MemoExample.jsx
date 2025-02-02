import React, { useCallback, useState } from "react";
import Info from "./Info";

function MemoExample() {
  //   const array = useState();
  //   const count = array[0];
  //   const setCount = array[1];
  //   OR
  const [count, setCount] = useState(0);
  const [list, setList] = useState([
    "List Element 1",
    "List Element 2",
    "List Element 3"
  ]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  const addNew = useCallback(() => {
    setList([...list, "New List Item"]);
  }, [list]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      {/* Counter */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#212121",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "2rem"
        }}
      >
        <button onClick={decrement} style={{ fontSize: "inherit" }}>
          -
        </button>
        <p style={{ color: "white" }}>{count}</p>
        <button onClick={increment} style={{ fontSize: "inherit" }}>
          +
        </button>
      </div>

      {/* Info */}
      <Info list={list} addNew={addNew} />
    </div>
  );
}

export default MemoExample;
