import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균 값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  //useCallback으로 감싸면,  number, list가 변화할 때만 렌더링.
  //렌더링할 때마다 함수를 재할당해야 하므로 속도 이슈가 있을 때 쓰면 되지않으려나..

  const inputEl = useRef(null);
  //useRef : 값이 바뀌어도 화면이 렌더링되지 않음. html 엘리먼트를 담을 수 있음.
  //1.  선언 : const inputEl = useRef(null);
  //2. 사용 : inputEl.current.focus();
  //3. jsx 선언 : ref={inputEl}
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);
  //useMemo는 [] 안에 있는 값이 바뀌었을 때 함수가 실행된다.
  // useEffect와의 차이점은, return값을 특정 값으로 반환한다는 거
  //불필요한 연산을 줄여준다.
  // useEffect의 return값은 clean up 함수이다.

  return (
    <>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <b>평균값 : {avg}</b>
    </>
  );
};

export default Average;
