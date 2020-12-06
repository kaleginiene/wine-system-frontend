import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, type, width }) {
  return (
    <S.Button onClick={handleClick} color={color} type={type} width={width}>
      {children}
    </S.Button>
  );
}

export default Button;
