import styled from "styled-components";
import "./navbar.css";
import Label from "../../../public/assets/logo.svg";
import { FaRegFile, FaBars, FaCircleXmark } from "react-icons/fa6";
import { FiCoffee, FiBookOpen } from "react-icons/fi";
import { TiLeaf } from "react-icons/ti";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <Grid>
        <NaviLeft>
          <Link to="/">
            <img src={Label} width={130} alt="BioMarkt Logo" />
          </Link>
          <Input type="checkbox" id="chk" />
          <ShowMenu htmlFor="chk">
            <FaBars />
          </ShowMenu>
          <NavMenu className="menu">
            <CustomLink to="/Angebote">
              <FaRegFile /> Angebote
            </CustomLink>
            <CustomLink to="/Rezepte">
              <FiCoffee /> Rezepte
            </CustomLink>
            <CustomLink to="/Bio-Wissen">
              <FiBookOpen /> Bio-Wissen
            </CustomLink>
            <CustomLink to="/Ueber-Uns">
              <TiLeaf /> Über Uns
            </CustomLink>
            <HideMenu htmlFor="chk">
              <FaCircleXmark />
            </HideMenu>
            <UnderMenu>
              <li>
                <CustomLink to="/rest">
                  <FaRegFile />
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/test">
                  <TiLeaf />
                </CustomLink>
              </li>
              <li>|</li>
              <li>
                <SetLanguage>DE</SetLanguage>
              </li>
              <li>
                <SetLanguage>AT</SetLanguage>
              </li>
            </UnderMenu>
          </NavMenu>
        </NaviLeft>
      </Grid>
    </Nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <NavLink>
      <Link className={isActive ? "active" : ""} to={to} {...props}>
        {children}
      </Link>
    </NavLink>
  );
}

const Nav = styled.nav`
  background: #fdfdfc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  width: 80%;
  max-width: 1400px;
  display: flex;
  justify-content: flex-start;
`;
const NaviLeft = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  position: relative;

  justify-content: flex-start;
  @media (max-width: 1010px) {
    justify-content: space-between;
  }
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  z-index: -1111;
  @media (max-width: 1010px) {
    display: block;
    &:checked ~ .menu {
      right: 0;
    }
  }
`;
const ShowMenu = styled.label`
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  display: none;
  line-height: 100px;

  @media (max-width: 1010px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    &#chk:checked ~ .menu {
      right: 0;
    }
  }
`;
const HideMenu = styled.label`
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  display: none;
  @media (max-width: 1010px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1010px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fff;
    right: -100%;
    top: 0;
    text-align: center;
    padding: 80px 0;
    line-height: normal;
    transition: 0.7s;
    z-index: 3;
  }
`;
const UnderMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 0;
  position: absolute;
  right: 0;
`;

const NavLink = styled.li`
  list-style-type: none;
  & a {
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  & a.active {
    color: #8eb32d;
  }
  & a:hover {
    color: #8eb32d;
  }
  @media (max-width: 1010px) {
    & a {
      display: block;
      margin-top: 10px;
    }
  }
`;
const SetLanguage = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding-top: 10px;
`;
