import { useState, useRef } from "react";
const defaultNames = [
  { id: 0, text: "눈사람" },
  { id: 1, text: "얼음" },
  { id: 2, text: "눈" },
  { id: 3, text: "비" },
];
const IterationSample = () => {
  const [names, setNames] = useState(defaultNames);
  const [text, setText] = useState("");
  const nextId = useRef(defaultNames.length + 1);
  //const [nextId, setNextId] = useState(defaultNames.length + 1);
  //   <li>눈사람</li>
  //         <li>얼음</li>
  //         <li>눈</li>
  //         <li>비</li>

  // e 를 꼭 중괄호로 넣어주기. e도 변수니까
  //Each child in a list should have a unique "key" prop 에러가 나는데, 그 이유는 key가 없기 때문에
  // 배열 등을 렌더링할 때, dom 에 key값이 있을 때 더 값을 빠르게 찾을 수 있기 때문임
  // 가상 dom을 통해 이전 모습과 현재 모습을 비교한 뒤 달라진 부분을 key값을 통해 매칭함
  // 따라서 index를 i로 주거나, 고유한 값을 부여해서 줘야 함

  const setNextId = (num) => {
    nextId.current = nextId.current + 1;
  };
  const clickEventHandler = () => {
    if (!text) {
      return;
    }
    alert(text);

    const newArray = [...names, { id: nextId.current, text }];
    //console.log(newArray);
    setNames(newArray);
    setText("");

    setNextId(nextId.current);
    console.log(newArray);
  };

  //배열삭제
  const deleteHandler = (id) => {
    const newNames = names.filter((e) => e.id !== id);
    setNames(newNames);
    //alert(id);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={clickEventHandler}>추가</button>
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => deleteHandler(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
