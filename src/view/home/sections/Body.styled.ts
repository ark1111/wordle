import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const RowItem = styled.div<{ $bgColor: string }>`
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  border: 1px solid #ffffff55;
  background-color: ${(props) => props.$bgColor};
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const GoalWord = styled.div`
  padding: 5px 10px;
  background-color: #fff;
  color: #111;
  font-size: 20px;
  font-weight: bold;
`;

export const ResultText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;
