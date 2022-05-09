// 부모가 자식에게 <h1> <div>등의 태그 덩어리를 보낼 경우, 자식 컴포넌트에서는 props.children으로 자동적으로 받게 된다.

//   {/* 삼항연산자. 가독성이 떨어지므로 자주 사용하지 않는 것을 권한다.*/}
//       {name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
//       {/* 조건부*/}
//       {name === "뷰" && <h1>리액트입니다.</h1>}
//       {/* undefined. null, '', false, 0. NaN 값일 때 렌더링하지 않는 법 */}
//       {name || <h2>이름이 없습니다</h2>}
//       {/* undefined, null 일 때는 렌더링되지 않고, 0. ''일 때는 렌더링됨. 매우 최신문법 */}
//       {name ?? <h2>이름이 없습니다</h2>}

// const MyComponent = (props) => {
//   //props의 비구조화 할당
//   const { name, children, name2 } = props;
//   return (
//     <>
//       <div>
//         {children}
//         안녕하세요. 제 이름은 {name}입니다. {name2}
//         {children}
//       </div>
//     </>
//   );
// };
// MyComponent.defaultProps = {
//   //부모에게서 보내는 props 가 없을 때 기본값을 지정
//   name: "기본이름",
// };

// export default MyComponent;

// 객체, 배열 참조 타입의 useState

// const byeClickHandler = () => {
//     setSayHi("안녕히가세요");
//   };

//   return (
//     <>
//       <button onClick={hiClickHandler}>입장</button>
//       <button onClick={byeClickHandler}>퇴장</button>
//       <h1 style={{ color: color }}>{sayHi}</h1>
//       <button
//         style={{ color: "red" }}
//         onClick={() => {  -->  함수에 파라미터가 필요할 경우 반드시화살표 함수를 써주기. 안 그러면 렌더링 될 때 실행되니까..!
//           setColor("red");
//         }}
//       >

// const newForm = { ...form, [name] : value }; //변수 name을 key값으로 쓰고 싶을 때 [] 대괄호로 감싸주면된다.

// const handleKeyUp = (e) => {
//     console.log(e.key); //어떤 값이 입력됐는지 알 수 있음.
//     if (e.key === "Enter") {
//       handleClick();
//     }
//   };

//   //   <li>눈사람</li>
//   //         <li>얼음</li>
//   //         <li>눈</li>
//   //         <li>비</li>

//   const nameList = names.map((e) => <li>{e}</li>); // e 를 꼭 중괄호로 넣어주기. e도 변수니까
//   console.log(nameList);
//   return (
//     <>
//       <ul>{nameList}</ul>
//     </>
//   );

// react-jsx-dev-runtime.development.js:97 Warning: Each child in a list should have a unique "key" prop. 오류
