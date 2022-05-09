import { useState } from "react";
const Counter = () => {
  // 그냥 number +=1 만 처리하면 콘솔에서는 찍히는데 화면에서는 렌더링이 되지 않음
  // 값이 변하면서, 변할 때마다 화면에 출력해야 하는 경우 state를 선언한다.
  // 변하는 값 <h1>{number} </h1> 부분의 dom만 변경됨

  const [number, setNumber] = useState(5);
  //배열의 비구조화 할당이라고 볼 수 있음. useState 함수의 return 값이 배열이기 때문에.

  // let number = 5;

  const handleClick = () => {
    setNumber(number + 1); //set함수는 비동기함수.
    console.log(number + 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
