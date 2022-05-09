const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "비"];

  //   <li>눈사람</li>
  //         <li>얼음</li>
  //         <li>눈</li>
  //         <li>비</li>

  // e 를 꼭 중괄호로 넣어주기. e도 변수니까
  //Each child in a list should have a unique "key" prop 에러가 나는데, 그 이유는 key가 없기 때문에
  // 배열 등을 렌더링할 때, dom 에 key값이 있을 때 더 값을 빠르게 찾을 수 있기 때문임
  // 가상 dom을 통해 이전 모습과 현재 모습을 비교한 뒤 달라진 부분을 key값을 통해 매칭함
  // 따라서 index를 i로 주거나, 고유한 값을 부여해서 줘야 함

  return (
    <>
      <ul>
        {names.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
