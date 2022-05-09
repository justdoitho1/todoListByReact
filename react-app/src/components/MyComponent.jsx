const MyComponent = ({ name, children, name2 }) => {
  //props 받아오기. 중괄호가 반드시 있어야 비구조화 할당 가능. let으로 사용되는 듯 ?

  //props의 비구조화 할당해 내부 변수로 이용. const로 만들고 싶을 때 안에서 사용
  //const { name, children, name2 } = props;
  return (
    <>
      <div>
        안녕하세요. 제 이름은 {name}입니다. {name2}
        {children}
      </div>
    </>
  );
};
MyComponent.defaultProps = {
  //부모에게서 보내는 props 가 없을 때 기본값을 지정
  name: "기본이름",
};

export default MyComponent;
