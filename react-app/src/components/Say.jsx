import { useState } from "react";

const Say = () => {
  const [sayHi, setSayHi] = useState("안녕하세요");
  const [color, setColor] = useState("red");
  const hiClickHandler = () => {
    setSayHi("안녕하세요");
  };
  const byeClickHandler = () => {
    setSayHi("안녕히가세요");
  };

  return (
    <>
      <button onClick={hiClickHandler}>입장</button>
      <button onClick={byeClickHandler}>퇴장</button>
      <h1 style={{ color: color }}>{sayHi}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>
    </>
  );
};

export default Say;
