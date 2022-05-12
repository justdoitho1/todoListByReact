const Jsx = () => {
  const name = "리액트";
  //const name2 = "뷰";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  const onClick = () => {
    alert("대엄");
  };

  return (
    <>
      <div style={style}>{name}</div>
      <h1>{name} 안녕</h1>
      {/* 삼항연산자. 가독성이 떨어지므로 자주 사용하지 않는 것을 권한다.*/}
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
      {/* 조건부*/}
      {name === "뷰" && <h1>리액트입니다.</h1>}
      {/* undefined. null, '', false, 0. NaN 값일 때 렌더링하지 않는 법 */}
      {name || <h2>이름이 없습니다</h2>}
      {/* undefined, null 일 때는 렌더링되지 않고, 0. ''일 때는 렌더링됨. 매우 최신문법 */}
      {name ?? <h2>이름이 없습니다</h2>}
      <input></input>
      <br></br>
      <button onClick={onClick}>룰루</button>
    </>
  );
};

export default Jsx;
//default 없이 export하면? import할 때 중괄호를 써줘야 함.
//
