import styled from "styled-components";
import { useState, useRef } from "react";
const Todo = () => {
  //자료구조 예시
  //const toDoList = [{ id: 0, text: "할일" }];

  //새 일정, 전체 일정 리스트 state 로 선언
  const [newToDo, setNewToDo] = useState(""); //새로 추가되는 일정
  const [toDoList, setToDoList] = useState([]); //일정

  //input에 foucs하기 위한 변수
  const inputEl = useRef(null);

  // id 설정하기 위한 변수
  const nextId = useRef(0);

  const setNextId = (num) => {
    nextId.current = num + 1;
  };

  //submit 시 이벤트
  const submitHandler = (e) => {
    //submit 해도 페이지 리로드 막는 이벤트
    e.preventDefault();

    if (newToDo === "") {
      alert("일정을 입력하세요.");
      return;
    }

    //state update할 리스트 새로 만들기
    const newArray = [...toDoList, { id: nextId.current, text: newToDo }];
    setToDoList(newArray);
    setNewToDo("");
    setNextId(nextId.current);
    inputEl.current.focus();
  };

  const deleteHandler = (id) => {
    const newArray = toDoList.filter((e) => e.id !== id);
    setToDoList(newArray);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onSubmit={submitHandler}>
          <InputText
            ref={inputEl}
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
          />
          <BtnSubmit>추가</BtnSubmit>
        </Form>
        <Body>
          <List>
            {toDoList.length === 0
              ? "일정을 입력하세요."
              : toDoList.map((todo) => (
                  <Item key={todo.id}>
                    <label htmlFor="">
                      <Content>{todo.text}</Content>
                    </label>
                    <BtnDelete onClick={() => deleteHandler(todo.id)}>
                      삭제
                    </BtnDelete>
                  </Item>
                ))}
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
`;

const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #fff;
  padding: 10px;
`;
const Form = styled.form`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

const Body = styled.div`
  background: #fff;
  height: 500px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Content = styled.span``;
const BtnDelete = styled.button``;

export default Todo;
