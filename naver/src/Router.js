import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/pages/Movie";
import Main from "./components/pages/Main";
import Book from "./components/pages/Book";
import TopNav from "./components/organisms/TopNav";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<TopNav />}>
          {/**중첩라우터 */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
