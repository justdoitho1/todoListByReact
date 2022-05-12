import styled from "styled-components";

const Box = styled.div`
  backgroud: ${(props) => props.color || "blue"};
`;

const Button = styled.button`
  color: red;
`;

const StyledComponents = () => {
  return (
    <>
      <Box color={"black"}>
        <Button>hi</Button>
      </Box>
    </>
  );
};

export default StyledComponents;
