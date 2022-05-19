import styled from "styled-components";
const Movie = () => {
  return (
    <>
      <h1>영화</h1>
      <Form>
        <InputText></InputText>
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <List>
        <Item>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MjBfMiAg%2FMDAxNDk1MjExODcxNTU4.1kao0r2r3IPxXvBUyRFncuNpZQ_mCt-Ze9IIy0p6Bkgg.juqtfY6A4jekJnnUtlDZ5ZSBwAHmxmXCqs4maInSdJwg.JPEG.sory84%2FScreenshot_20170520-012949.jpg&type=sc960_832"></Thumbnail>
          <Title>캐롤</Title>
        </Item>
        <Item>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MjBfMiAg%2FMDAxNDk1MjExODcxNTU4.1kao0r2r3IPxXvBUyRFncuNpZQ_mCt-Ze9IIy0p6Bkgg.juqtfY6A4jekJnnUtlDZ5ZSBwAHmxmXCqs4maInSdJwg.JPEG.sory84%2FScreenshot_20170520-012949.jpg&type=sc960_832"></Thumbnail>
          <Title>캐롤</Title>
        </Item>
        <Item>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MjBfMiAg%2FMDAxNDk1MjExODcxNTU4.1kao0r2r3IPxXvBUyRFncuNpZQ_mCt-Ze9IIy0p6Bkgg.juqtfY6A4jekJnnUtlDZ5ZSBwAHmxmXCqs4maInSdJwg.JPEG.sory84%2FScreenshot_20170520-012949.jpg&type=sc960_832"></Thumbnail>
          <Title>캐롤</Title>
        </Item>
      </List>
    </>
  );
};

const Form = styled.div`
  display: flex;
  padding: 10px;
`;

const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button`
  margin-left: 10px;
`;

const List = styled.ul`
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

export default Movie;
