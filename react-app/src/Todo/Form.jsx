import { useState, useRef } from "react";
import styled from "styled-components";

const Form = ({ onAdd }) => {
  const [newToDo, setNewToDo] = useState(""); //새로 추가되는 일정
  const inputEl = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setNewToDo("");
    onAdd(newToDo);
    inputEl.current.focus();
  };

  return (
    <>
      <Container onSubmit={submitHandler}>
        <InputText
          value={newToDo}
          ref={inputEl}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <BtnSubmit>추가</BtnSubmit>
      </Container>
    </>
  );
};

const Container = styled.form`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

export default Form;
