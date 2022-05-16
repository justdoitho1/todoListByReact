import styled from "styled-components";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //props 중 data 프로퍼티만 받아오기

  const imgBtnEventHandler = (idx, btnType) => {
    if (btnType === "prev") {
      idx === 0 ? setActiveIndex(data.length - 1) : setActiveIndex(idx - 1);
    } else if (btnType === "next") {
      idx === data.length - 1 ? setActiveIndex(0) : setActiveIndex(idx + 1);
    }
  };

  return (
    <Container>
      <List>
        {data.map(({ id, image }, index) => (
          //data 안에 있는 id, image 프로퍼티를 비구조화 할당
          <Image key={id} src={image} isShow={activeIndex === index}></Image>
        ))}
      </List>
      <BtnPrev onClick={() => imgBtnEventHandler(activeIndex, "prev")}>
        이전
      </BtnPrev>
      <BtnNext onClick={() => imgBtnEventHandler(activeIndex, "next")}>
        다음
      </BtnNext>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;
const List = styled.div``;
const Image = styled.img`
  opacity: ${({ isShow }) => !isShow && "0"};
  transition: opacity 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 600px;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const BtnPrev = styled(Btn)`
  // Btn css 상속
  left: 20px;
`;
const BtnNext = styled(Btn)`
  right: 20px;
`;

export default Carousel;
