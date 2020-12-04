import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #b3c5d6;
  border-radius: 5px;
  padding: 0.5em;
  height: ${(props) => props.theme.primary.height};
  margin: 0.2em 0 1em;
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 0.5em;
  margin: 1em 0;
  border: 2px solid #b3c5d6;
  border-radius: 5px;
  font-size: 1.2em;
  &&:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  width: ${(props) => {
    if (props.width) {
      return props.width;
    } else {
      return "100%";
    }
  }};
  box-sizing: border-box;
  border: 2px solid #b3c5d6;
  border-radius: 5px;
  padding: 0.685em;
  margin: 0.2em 0 1em;
`;
export const Radio = styled.input`
  width: 15px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  margin: 10px;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 1.2em;
  text-align: left;
  font-weight: bold;
`;
