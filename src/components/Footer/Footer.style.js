import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  border-top: 2px solid #b3c5d6;
  text-align: center;
  margin-top: 4em;
  padding: 1.5em 1em;
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img`
  height: 40px;
`;
export const LogoTitle = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 1em;
  color: #222;
  text-decoration: none;
  margin-left: -0.5em;
`;
