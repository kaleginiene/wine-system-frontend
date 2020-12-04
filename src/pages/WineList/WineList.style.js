import styled from "styled-components";

export const Main = styled.main`
  min-height: 67vh;
  overflow-x: auto;
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
