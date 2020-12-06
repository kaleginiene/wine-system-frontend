import styled from "styled-components";
import Exit from "../../assets/exit.svg";

export const Main = styled.main`
  width: 56em;
  max-width: 100%;
  margin: 0 auto;
  min-height: 67vh;
  overflow-x: auto;
  position: relative;
`;

export const Form = styled.form`
  width: 100%;
  @media only screen and (max-width: 691px) {
    display: block;
  }
  Button {
    padding: 0.9em;
    margin-top: 1.35em;
  }
`;

export const Table = styled.table`
  border: 2px solid black;
  border-collapse: collapse;
  width: 100%;
  thead {
    border-collapse: collapse;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
    :nth-child(even) {
      background-color: #eaf1f7;
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border: 1px solid black;
    :last-child {
      text-align: center;
    }
    :nth-last-child(2) {
      text-align: center;
    }
  }
  th {
    background-color: #eaf1f7;
  }
`;

export const Icon = styled.img`
  width: 1.3em;
  border-radius: 1em;
  cursor: pointer;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const ConfirmBlock = styled.div`
  position: fixed;
  top: 30%;
  left: 40%;
  width: 20em;
  min-height: 10em;
  padding: 1em;
  background: #fff;
  border: 2px solid ${(props) => props.theme.primary.background};
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  z-index: 2;
  display: ${(props) => (props.display === "hide" ? "none" : "block")};
  Button {
    width: 9.5em;
  }
  Button:hover {
    background-color: #293a49;
    color: #fff;
  }
`;

export const ExitBtn = styled.div`
  background-image: url(${Exit});
  width: 2em;
  height: 2em;
  border-radius: 2em;
  cursor: pointer;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: #98c1e2;
`;
