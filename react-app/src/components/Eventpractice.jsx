import { useState } from "react";
const EventPractice = () => {
  //const [message, setMessage] = useState("");
  //const [username, setUsername] = useState("");
  const defaultForm = { username: "", message: "", message2: "" };
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message, message2 } = form;

  const handleClick = (e) => {
    //console.log(e.target);
    alert(`${username} : ${message2}`);
    setForm({
      username: "",
      message: "",
      message2: "",
    });
    //setMessage("");
    //setUsername("");
  };

  const handleKeyUp = (e) => {
    //  console.log(e.key); //어떤 값이 입력됐는지 알 수 있음.
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name; //input 태그의 name
    const value = e.target.value; //input 태그의 value
    const newForm = { ...form, [name]: value }; //변수 name을 key값으로 쓰고 싶을 때 [] 대괄호로 감싸주면된다.
    console.log(newForm);
    setForm(newForm);
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        name="username"
        type="text"
        value={username}
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        //</>{(e) => {
        //  setUsername(e.target.value);
        // console.log(e.target.value);
        //}}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        //</>{(e) => {
        //  setMessage(e.target.value);
        // console.log(e.target.value);
        // }}
        onKeyUp={handleKeyUp}
        value={message} // 양방향 바인딩. 뷰와 데이터를 연동해줘야 함. onChange, value를 모두 연결필요
      ></input>
      <input
        type="text"
        name="message2"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        //</>{(e) => {
        //  setMessage(e.target.value);
        // console.log(e.target.value);
        // }}
        onKeyUp={handleKeyUp}
        value={message2} // 양방향 바인딩. 뷰와 데이터를 연동해줘야 함. onChange, value를 모두 연결필요
      ></input>
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
