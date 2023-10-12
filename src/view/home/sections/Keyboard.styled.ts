import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const RowItem = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 70px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: ${(props) => props.$bgColor};
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
