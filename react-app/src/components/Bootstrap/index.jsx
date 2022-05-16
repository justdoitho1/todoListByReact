import Accordion from "./Accordion";
import { accordianData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Carousel from "./Carousel";

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
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
    </>
  );
};

export default Bootstrap;
