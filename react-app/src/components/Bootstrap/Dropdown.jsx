import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
/** 드롭다운 구현
 * display-none 또는 조건부렌더링 && 으로 토글 조절
 * css로 토글 조정하면, 화면에 나타나지 않을지라도 ul이 이미 렌더링된 상태
 *
 */
const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const buttonEl = useRef(null);

  useEffect(() => {
    //이런식으로 html에 직접 addEventListener를 지정하면 useEffect를 지정해도 uesEffect가 제대로 먹히지 않음
    //마운트된 이후에만 실행되어야 하는데, 언마운트된 이후에도 이벤트가 계속 남아있음
    //또한 마운트될 대마다 이벤트가 계속 중첩돼서  클릭이벤트가 한번에 2~4번씩 일어남
    //이 같은 sideEffect를 조정할 필요가 있음
    //이때 clean up 함수를 사용해줌
    const onClick = (e) => {
      if (e.target !== buttonEl.current) {
        //현재 클릭한 곳과 button element를 비교해서 다를 때만 함수를 끈다
        setIsShow(false);
      }
    };

    document.body.addEventListener("click", onClick);

    //event
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <Container>
        <Button ref={buttonEl} onClick={() => setIsShow(!isShow)}>
          Dropdown
        </Button>
        <Menu isShow={isShow}>
          <Item>item #1</Item>
          <Item>item #2</Item>
          <Item>item #3</Item>
          <Item>item #4</Item>
        </Menu>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Menu = styled.ul`
  display: ${({ isShow }) => !isShow && "none"};
  top: 45px;
  background: #fff;
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 120px;
`;

const Item = styled.li`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background-color: #efefef;
  }
`;

const Button = styled.button`
  width: 120px;
  cursor: pointer;
  background: #198704;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px 0;
`;

export default Dropdown;
