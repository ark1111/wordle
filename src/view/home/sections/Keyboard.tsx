import React from "react";
import { Box, Row, RowItem } from "./Keyboard.styled";
import { keyboardKeyList } from "./data";

type Props = {
  selectKey: (key: string) => void;
  letterWithCorrectPos: string[];
  letterWithIncorrectPos: string[];
  wrongLetters: string[];
};

const statusColorList = ["#818384", "#538d4e", "#b59f3b", "#3a3a3c"];

const Keyboard = ({
  selectKey,
  letterWithCorrectPos,
  letterWithIncorrectPos,
  wrongLetters,
}: Props) => {
  const checkStatus = (letter: string) => {
    if (letterWithCorrectPos.includes(letter)) {
      return 1;
    } else if (letterWithIncorrectPos.includes(letter)) {
      return 2;
    } else if (wrongLetters.includes(letter)) {
      return 3;
    } else {
      return 0;
    }
  };
  return (
    <Box>
      {keyboardKeyList.map((item) => (
        <Row key={item.id}>
          {item.list.map((keyItem, keyIndex) => (
            <RowItem
              onClick={() => selectKey(keyItem.key)}
              $bgColor={statusColorList[checkStatus(keyItem.key)]}
            >
              {keyItem.key}
            </RowItem>
          ))}
        </Row>
      ))}
    </Box>
  );
};

export default Keyboard;
