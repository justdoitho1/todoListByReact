import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(7);
  //   const addEventListner = () => {
  //     setNumber(number + 1);
  //   };
  //   const minusEventListner = () => {
  //     setNumber(number - 1);
  //   };

  // 아래와 같이 함수를 재활용할 수 있다.
  const handleClick = (num) => {
    setNumber(number + num);
  };
  return (
    <>
      <h2> 현재 카운터 값은 {number}입니다. </h2>
      <button onClick={() => handleClick(3)}>+3</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </>
  );
};

export default Counter2;
