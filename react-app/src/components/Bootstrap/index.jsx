import Accordion from "./Accordion";
import { accordianData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Carousel from "./Carousel";
import ModalName from "./ModalName";
const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  //모달에서 확인 버튼을 눌렀을 때 실행하는 이벤트
  const handleClose = () => {
    //모달끄기
    setIsShowModalName(false);
  };

  const handleSubmit = (name) => {
    //name : 모달(자식컴포넌트)에서 받아오는 변수. input안의 text
    //모달에서 데이터를 받아와서, 부모의 데이터를 변경해야 하기 때문에 모달에서 실행함.
    setName(name);
  };

  const [name, setName] = useState("홍길동");

  return (
    <>
      <Accordion data={accordianData}></Accordion>
      <button
        onClick={() => {
          setIsShowDropdown(!isShowDropdown);
        }}
      >
        dropdown
      </button>
      {isShowDropdown && <Dropdown></Dropdown>}
      <Carousel data={carouselData}></Carousel>
      <h1>이름: {name}</h1>
      <button onClick={() => setIsShowModalName(true)}> 이름바꾸기</button>
      {isShowModalName && (
        <ModalName
          onClose={handleClose}
          onhandleSubmit={handleSubmit}
          name={name}
        />
      )}
    </>
  );
};

export default Bootstrap;
