import { useRef } from "react";

const InputFile = () => {
  const fileEl = useRef(null);

  const clickEventHandler = () => {
    fileEl.current.click();
  };
  return (
    <>
      <button onClick={clickEventHandler}>업로드</button>
      <input ref={fileEl} type="file" style={{ display: "none" }} />
    </>
  );
};

export default InputFile;
