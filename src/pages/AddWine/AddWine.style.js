import styled from "styled-components";

export const Main = styled.main`
  min-height: 67vh;
  padding-top: 5em;
  max-width: 100%;
`;

export const Form = styled.form`
  padding: 1em 1em 4em 1em;
  margin-top: 6em;
  width: 40em;
  max-width: 95%;
  margin: 0 auto;
  background-color: #ecf0f4;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Halfwrapper = styled.div`
  width: calc(50% - 1em);
  &:not(:last-child) {
    margin-right: 1em;
  }
`;
