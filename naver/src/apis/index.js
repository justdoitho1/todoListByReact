//API
import axios from "axios";

export const getMovies = async (params) => {
  const config = {
    url: "/v1/search/movie.json",
    method: "GET",
    headers: {
      "X-Naver-Client-Id": "PrnoQF83PclSlrjBIMMM",
      "X-Naver-Client-Secret": "3c7p_HabEG",
    },
    params,
  };

  const result = await axios(config); // 검색결과담기
  return result.data;
};
