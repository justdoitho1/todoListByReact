import { useState, useEffect } from "react";
import useInputs from "../hooks/useInputs";
const Info = () => {
  const [state, onChange] = useInputs({
    id: "",
    nick: "",
  });

  const { id, nick } = state;
  // const [id, setId] = useState("");
  // const [nick, setNick] = useState("");

  useEffect(() => {
    console.log("mount");
    console.log({ id, nick });

    return () => {
      console.log("unmount");
      console.log(id);
    };
  }, []);

  // 빈 배열일 경우 최초 렌더링(마운트) 때만 실행된다. 그 이후 렌더링이 되더라도 실행되지 않음.
  // 배열 안에 값이 있으면, 그 값이 바뀔 때마다 실행된다. 그냥 변수는 넣어봤자 렌더링되면 초기화되버리니까 보통 state를 넣는다.
  //clean up : 컴포넌트가 언마운트 되기 전, 업데이트되기 직전 작업을 수행하고 싶을 때 뒷정리 (cleanup) 함수 반환
  // return ()=>{} 이런 식으로 진행
  // mount : 컴포넌트가 화면에 그려질 때
  //  unmount : 컴포넌트가 화면에서 사라질 때

  //reducer
  //redux에서 쓰이는 hooks
  //

  //onChange 로 입력값을 state에 넣기

  //   const changeHandler = (e) => {
  //     if (e.target.name === "id") {
  //       setId(e.target.value);
  //     } else if (e.target.name === "nick") {
  //       setNick(e.target.value);
  //     }
  //     //console.log(e.target.name);
  //   };

  return (
    <>
      <input
        value={id}
        name="id"
        onChange={onChange}
        //(e) => setId(e.target.value)
      ></input>
      <input
        value={nick}
        name="nick"
        onChange={onChange}
        //(e) => setNick(e.target.value)
      ></input>
      <br></br>
      <h3>이름 : {id}</h3>
      <h3>닉네임 : {nick}</h3>
    </>
  );
};

export default Info;
