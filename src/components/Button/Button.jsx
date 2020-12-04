import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, type }) {
  return (
    <S.Button onClick={handleClick} color={color} type={type}>
      {children}
    </S.Button>
  );
}

export default Button;
