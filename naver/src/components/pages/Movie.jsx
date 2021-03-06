import { useEffect, useState } from "react";
import { getMovies } from "../../apis";
import List from "../../templates/Movie/List";
import { countryList } from "../../datas";
import SearchForm from "../../templates/Movie/SearchForm";
import TopNav from "../organisms/TopNav";
//https://developers.naver.com/docs/serviceapi/search/movie/movie.md#%EC%98%81%ED%99%94
//영화 검색 api json 출력 포멧으로 가져옴
//401  에러  : 유효한 인증 정보가 부족. 네이버에서 제공한  id랑 secret을 headers 에 기입해야 함
//cors 에러 : 브라우저 js에서 다른 도메인 / 포트로 http 요청하면 요청거부
//cors 에러 해결 : 1) 요청서버(네이버오픈api)에서 프론트 도메인을 허용
//2) 서버를 직접 만들어서 프론트 -> 커스텀서버 -> 요청서버
//3) webpack dev server에서 프록시 서버를 이용. -> package.json에서 "proxy": "https://openapi.naver.com/" 추가하고
//   url: "/v1/search/movie.json", url에서 앞에 부분 빼면 됨.
//프록시, async 공부해야할듯..
const Movie = () => {
  //렌더링될 때 세팅

  //통신할 때나 화면에 데이터를 그릴 때 여러 파라미터를 같이 써야 한다면 아래와 같이 객체로 관리하는 것을 권장한다.
  const [params, setParams] = useState({
    query: "",
    country: "",
  });
  //객체의 각 프로퍼티를 아래와 같이 비구조화 할당해서 쓰는 것도 좋은 방법이다.
  const { query, country } = params;
  const [result, setResult] = useState([]); //검색결과 담을 list

  //영화 이름이랑 값
  //state 객체의 내용을 변경하고 싶을 때, 아래와 같이 key와 value를 파라미터로 받아 관리할 수 있다.
  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    if (!query) return;

    const params = { query: query };

    if (country !== "") {
      params.country = country;
    }

    //api에서 가져오는 함수. 검색 결과 갖기
    const { items } = await getMovies(params);
    setResult(items);
  };

  return (
    <>
      <h1>영화</h1>
      <SearchForm
        onChange={handleChange}
        // onChangeCountry={(val) => setCountry(val)}
        // onChangeQuery={(val) => {
        //   setQuery(val);
        // }}
      ></SearchForm>
      <List data={result}></List>
    </>
  );
};

export default Movie;
