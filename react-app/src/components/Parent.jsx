import MyComponent from "./MyComponent";

const Parent = () => {
  const name2 = "nodejs";

  const array = [1, 2, 3];
  const obj = { 1: 1, 2: 2, 3: 3 };

  return (
    <>
      Parent
      <MyComponent name="암온더넥슽레블" name2={name2} />
      <MyComponent name="뷰">
        <h1>부모에서 보내는 컴포넌트. props.children으로 소환</h1>
        <div>children??</div>
      </MyComponent>
      <MyComponent />
    </>
  );
};

export default Parent;
