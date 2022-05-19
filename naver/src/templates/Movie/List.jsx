import styled from "styled-components";

const List = ({ data }) => {
  return (
    <>
      <Container>
        {data.map(({ link, image, title }) => (
          <Item key={link}>
            <a href={link} target="_blank" rel="noreferer">
              <Thumbnail src={image}></Thumbnail>
              <Title dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </Item>
        ))}
      </Container>
    </>
  );
};

const Container = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.li``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default List;
