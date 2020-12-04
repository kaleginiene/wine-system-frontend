import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import * as S from "./Footer.style";

function Footer() {
  return (
    <S.Footer>
      <S.FlexBlock>
        <Link to="/">
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
        <S.LogoTitle to="/">Wine Stock</S.LogoTitle>
      </S.FlexBlock>
      <p>&copy; All Rights Reserved</p>
    </S.Footer>
  );
}

export default Footer;
