import styled from "styled-components";
import { Link } from "react-router-dom";
import Exit from "../../assets/exit.svg";

export const Header = styled.header`
  padding: 1em;
  border-bottom: 2px solid #b3c5d6;
`;

export const Wrapper = styled.div`
  width: 56em;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
`;
export const LogoTitle = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 1.5em;
  color: #222;
  text-decoration: none;
  margin-left: -0.5em;
`;

export const Actions = styled.nav`
  @media only screen and (max-width: 691px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

//mobile menu style

export const Burger = styled.div`
  display: none;
  @media only screen and (max-width: 691px) {
    display: block;
    width: 3em;
    float: right;
    padding: 0.3em;
    border-radius: 0.5em;
    box-sizing: border-box;
    &:hover {
      box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const BurgerLine = styled.div`
  padding: 0.2em;
  background-color: #b3c5d6;
  border-radius: 2em;
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export const MobileNav = styled.div`
  width: 10em;
  padding: 1em;
  position: absolute;
  right: 0;
  top: 6em;
  background-color: #fff;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.5em 0 0em 0.5em;
  transition: ease-in 0.3s;
  border: 2px solid #b3c5d6;
  z-index: 99;
`;
export const ExitBtn = styled.div`
  background-image: url(${Exit});
  width: 2em;
  height: 2em;
  border-radius: 2em;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: right;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
`;
