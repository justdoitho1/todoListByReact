import styled from "styled-components";
import { useState, useRef } from "react";
import Item from "./Item";
import Form from "./Form";
const Todo = () => {
  const [toDoList, setToDoList] = useState([]); //일정

  //자료구조 예시
  //const toDoList = [{ id: 0, text: "할일", isDone :true }];

  // id 설정하기 위한 변수
  const nextId = useRef(0);

  const setNextId = (num) => {
    nextId.current = num + 1;
  };

  //submit 시 이벤트
  const handleAdd = (text) => {
    if (text === "") {
      alert("일정을 입력하세요.");
      return;
    }

    //state update할 리스트 새로 만들기
    const newArray = [
      ...toDoList,
      { id: nextId.current, text: text, isDone: false },
    ];
    setToDoList(newArray);
    setNextId(nextId.current);
  };

  const deleteHandler = (id) => {
    const newArray = toDoList.filter((e) => e.id !== id);
    setToDoList(newArray);
  };

  const handleChecked = (id) => {
    //id로 item 찾아서 값을 반대로 바꿔주기
    const newList = toDoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    setToDoList(newList);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd}></Form>
        <Body>
          <List>
            {toDoList.length === 0
              ? "일정을 입력하세요."
              : toDoList.map((todo, i) => (
                  <Item
                    key={i}
                    onDelete={deleteHandler}
                    onChecked={handleChecked}
                    data={todo}
                  ></Item>
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

const Body = styled.div`
  background: #fff;
  height: 500px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Todo;
