import styled from "styled-components";
import { useState } from "react";

const Accordion = ({ data }) => {
  /**
   * bootstrap.js 에서 하드코딩된 데이터를 갖고 올 때
   * 여기에서 import 해올 수 있지만 Accrdion 컴포넌트를 사용하는
   * 부모 컴포넌트에서 import를 해온 뒤 여기서 data로 props를 넘겨주면
   * 이 컴포넌트를 데이터에 종속적이지 않게 사용할 수 있다.
   */
  const [activeIndex, setActiveIndex] = useState(0);

  const clickHandler = (index) => {
    //열려 있는 거 클릭하면 모두 닫기
    if (index === activeIndex) {
      setActiveIndex(-1); //state의 type이 정수이므로 -1
    } else {
      setActiveIndex(index);
    }

    //   index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index);
  };

  return (
    <>
      <List>
        {data.map(({ id, title, content }, index) => (
          <Item key={id}>
            <Header onClick={() => clickHandler(index)}>{title}</Header>
            {/*클릭하면 activeIndex의 값이 id로 세팅됨. */}
            <Body isActive={index === activeIndex}>{content}</Body>
            {/**id와 actinveIndex가 같을 때 true 반환, display 상태가 block이 되고
             * 아닐 때는 false 반환
             */}
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  border: 1px solid #ddd;
  margin: 100px;
  border-radius: 4px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Header = styled.div`
  padding: 20px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  display: ${({ isActive }) =>
    !isActive && "none"}; //isActive가 false일 때 none(안보임)
`;

export default Accordion;
