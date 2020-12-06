import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) => (props.color === "primary" ? "#fff" : "#222")};
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5em 2em;
  cursor: pointer;
  float: right;
  text-transform: uppercase;
  margin: 1em 0;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    } else {
      return "none";
    }
  }};
  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
  }
  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;
