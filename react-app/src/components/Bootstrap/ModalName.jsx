import styled from "styled-components";
import { useState } from "react";

const ModalName = ({ onClose, onhandleSubmit, name }) => {
  const [text, setText] = useState(name);

  //input이 바뀔 때마다 text set
  const changeHandler = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <h2>이름바꾸기</h2>
        <input onChange={changeHandler} value={text}></input>
        {/*버튼을 클릭하면 input에 저장된 text가 부모의 함수로 전달
        onClose는 부모로부터 받아온 함수. */}
        <button
          onClick={() => {
            onhandleSubmit(text);
            onClose();
          }}
        >
          확인
        </button>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50);
  padding: 20px;
`;

export default ModalName;
