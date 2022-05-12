import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value, //e.target.name : e.target.value
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    nick: "", //state 의 초깃값
  });

  const { id, nick } = state;
  const onChange = (e) => {
    dispatch(e.target); // action으로 들어감.
  };

  return (
    <>
      <input value={id} name="id" onChange={onChange}></input>
      <input value={nick} name="nick" onChange={onChange}></input>
      <br></br>
      <h3>이름 : {id}</h3>
      <h3>닉네임 : {nick}</h3>
    </>
  );
};

export default InfoReducer;
