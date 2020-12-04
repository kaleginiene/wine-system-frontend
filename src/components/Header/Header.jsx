import React, { useState } from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

function Header({ loggedIn, logout }) {
  const [mobileNav, setMobileNav] = useState("");

  return (
    <S.Header>
      <S.Wrapper>
        <S.FlexBlock>
          <Link to="/">
            <S.Logo src={logoImg} alt="Logo" />
          </Link>
          <S.LogoTitle to="/">Wine Stock</S.LogoTitle>
        </S.FlexBlock>
        <S.Actions>
          {!loggedIn && (
            <>
              <S.StyledLink to="/register">Register</S.StyledLink>
              <S.StyledLink to="/login">Login</S.StyledLink>
            </>
          )}
          {loggedIn && (
            <>
              <S.StyledLink to="/stock-up">Stock Up</S.StyledLink>
              <S.StyledLink to="/">Wine List</S.StyledLink>
              <S.StyledLink to="/add-wine">Add Wine</S.StyledLink>
              <S.StyledLink to="/login" onClick={logout}>
                Logout
              </S.StyledLink>
            </>
          )}
        </S.Actions>
        {/* Mobile Burger menu */}
        <S.Burger
          onClick={() => {
            if (mobileNav === "show") {
              setMobileNav("hide");
            } else {
              setMobileNav("show");
            }
          }}
        >
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.Burger>
        {mobileNav === "show" && (
          <S.MobileNav>
            <S.ExitBtn onClick={() => setMobileNav("hide")}></S.ExitBtn>
            {!loggedIn && (
              <S.Ul>
                <S.ListItem>
                  <S.StyledLink to="/register">Register</S.StyledLink>
                </S.ListItem>
                <S.ListItem>
                  <S.StyledLink to="/login">Login</S.StyledLink>
                </S.ListItem>
              </S.Ul>
            )}
            {loggedIn && (
              <S.Ul>
                <S.ListItem>
                  <S.StyledLink to="/" onClick={() => setMobileNav("hide")}>
                    Wine List
                  </S.StyledLink>
                </S.ListItem>
                <S.ListItem>
                  <S.StyledLink
                    to="/add-wine"
                    onClick={() => setMobileNav("hide")}
                  >
                    Add Wine
                  </S.StyledLink>
                </S.ListItem>
                <S.ListItem>
                  <S.StyledLink
                    to="/regions"
                    onClick={() => setMobileNav("hide")}
                  >
                    Wine Regions
                  </S.StyledLink>
                </S.ListItem>
                <S.ListItem>
                  <S.StyledLink
                    to="/add-region"
                    onClick={() => setMobileNav("hide")}
                  >
                    Add Region
                  </S.StyledLink>
                </S.ListItem>
                <S.ListItem>
                  <S.StyledLink to="/login" onClick={logout}>
                    Logout
                  </S.StyledLink>
                </S.ListItem>
              </S.Ul>
            )}
          </S.MobileNav>
        )}
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
