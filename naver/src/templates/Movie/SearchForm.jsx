import styled from "styled-components";
import { countryList } from "../../datas";
import { useState } from "react";

const SearchForm = ({ onChange }) => {
  const [searchWord, setSearchWord] = useState(""); //검색할 단어

  const searchHandler = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: searchWord });
    // onChangeQuery(searchWord);
  };

  return (
    <Form onSubmit={searchHandler}>
      <select
        onChange={(e) => {
          onChange({ name: "country", value: e.target.value });
        }}
      >
        <option value="" key="All">
          전체
        </option>
        {countryList.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <InputText
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        value={searchWord}
      ></InputText>
      <BtnSubmit>검색</BtnSubmit>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button`
  margin-left: 10px;
`;

export default SearchForm;
