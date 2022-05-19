import styled from "styled-components";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const linkList = [
  {
    link: "/",
    name: "메인",
  },
  {
    link: "/movie",
    name: "영화",
  },
  {
    link: "/book",
    name: "책",
  },
];
const TopNav = () => {
  // const [isShow, setIsShow] = useState(true);
  // //라우터 돔에 있는 커스텀 훅으로, 현재 주소의 정보를 가져옴
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   const isMain = pathname === "/";
  //   setIsShow(!isMain);
  // }, [pathname]);

  // if (!isShow) return <></>;

  return (
    <>
      <Container>
        <Nav>
          {linkList.map(({ link, name }) => (
            <Link to={link} key={link}>
              <BtnLink>{name}</BtnLink>
            </Link>
          ))}
        </Nav>
      </Container>
      <Outlet></Outlet>
      {/* router.js에서 자식 라우트로 둔 애들을 outlet 컴포넌트를 여기서 호출할 수 있음. */}
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const BtnLink = styled.button`
  background: #fff;
  border: 1px solid;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;
const Link = styled(NavLink)`
  &.active {
    //자기 자신이 active 클래스를 갖고 있을 때
    ${BtnLink} {
      background: #000;
      color: #fff;
    }
  }
`;
export default TopNav;
