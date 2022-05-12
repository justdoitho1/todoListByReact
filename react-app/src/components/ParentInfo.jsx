import { useState } from "react";
import Info from "./Info";
import InfoReducer from "./InfoReducer";

const ParentInfo = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        toggle
      </button>
      {isShow && <InfoReducer></InfoReducer>}
    </div>
  );
};

export default ParentInfo;
