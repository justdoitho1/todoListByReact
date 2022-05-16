import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  //useEffect에는 async를 붙일 수가 없음
  useEffect(() => {
    fetch();

    // useEffect에는 async를 바로 붙일 수가 없어서 이처럼 즉시실행함수로 선언할 수도 있다.
    //  (async () => {
    //         const response = await axios.get(
    //           "https://jsonplaceholder.typicode.com/todos/1"
    //         ); //get함수
    //         setData(response.data);
    //       })();
  }, []);

  const fetch = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    ); //get함수
    setData(response.data);
  };

  const onClick = () => {};

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        ></textarea>
      )}
    </div>
  );
};

export default Axios;
