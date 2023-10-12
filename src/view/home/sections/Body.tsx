import {
  Box,
  GoalWord,
  ResultBox,
  ResultText,
  Row,
  RowItem,
} from "./Body.styled";

type Props = {
  cells: {
    id: number;
    list: string[];
    isSubmitted: boolean;
  }[];
  goalWord: "GHOST";
  endStatus: null | "win" | "lose";
};

const statusColorList = ["transparent", "#538d4e", "#b59f3b", "#3a3a3c"];

const Body = ({ cells, goalWord, endStatus }: Props) => {
  const checkStatus = (letter: string, index: number, isSubmitted: boolean) => {
    if (isSubmitted) {
      if (letter === goalWord[index]) {
        return 1;
      } else {
        if (goalWord.includes(letter)) {
          return 2;
        } else {
          return 3;
        }
      }
    } else {
      return 0;
    }
  };
  return (
    <Box>
      {endStatus && (
        <ResultBox>
          <GoalWord>{goalWord}</GoalWord>
          <ResultText>
            {endStatus === "win" ? "You win :)" : " You lose!"}
          </ResultText>
        </ResultBox>
      )}
      {cells.map((item) => (
        <Row>
          {item.list.map((cellItem, cellIndex) => (
            <RowItem
              $bgColor={
                statusColorList[
                  checkStatus(cellItem, cellIndex, item.isSubmitted)
                ]
              }
            >
              {cellItem}
            </RowItem>
          ))}
        </Row>
      ))}
    </Box>
  );
};

export default Body;
