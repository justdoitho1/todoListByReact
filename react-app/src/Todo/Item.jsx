import styled, { css } from "styled-components";

const Item = ({ data, onDelete, onChecked }) => {
  const { id, text, isDone } = data;

  const handleChange = (e) => {
    //
    onChecked(id);
  };

  return (
    <>
      <Container key={id}>
        <input type="checkbox" checked={isDone} onChange={handleChange}></input>
        <label htmlFor="">
          <Content isDone={isDone}>{text}</Content>
        </label>
        <BtnDelete onClick={() => onDelete(id)}>삭제</BtnDelete>
      </Container>
    </>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Content = styled.span`
  ${({ isDone }) =>
    isDone &&
    css`
      color: #ddd;
      text-decoration: line-through;
    `}
`;

const BtnDelete = styled.button``;

export default Item;
