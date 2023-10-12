import { useState } from "react";

import { Box } from "./index.styled";
import Body from "./sections/Body";
import Header from "./sections/Header";
import Keyboard from "./sections/Keyboard";
import { initailCellsdata } from "./sections/data";

type Props = {};

const Wordle = (props: Props) => {
  const goalWord = "GHOST";
  const [cells, setCells] = useState(initailCellsdata);
  const [activeCellsRowIndex, setActiveCellsRowIndex] = useState(0);
  const [activeCellIndex, setActiveCellIndex] = useState(0);
  const [letterWithCorrectPos, setLetterWithCorrectPos] = useState<string[]>(
    []
  );
  const [letterWithIncorrectPos, setLetterWithIncorrectPos] = useState<
    string[]
  >([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [endStatus, setEndStatus] = useState<null | "win" | "lose">(null);

  const selectKey = (key: string) => {
    const newList = [...cells];
    if (!endStatus) {
      if (key === "BACK" && activeCellIndex > 0) {
        //remove letter
        newList[activeCellsRowIndex].list[activeCellIndex - 1] = "";
        setActiveCellIndex((oldValue) => oldValue - 1);
      } else if (key === "ENTER") {
        //submit word
        if (activeCellIndex === 5) {
          let newLetterList1 = [...letterWithCorrectPos];
          let newLetterList2 = [...letterWithIncorrectPos];
          let newLetterList3 = [...wrongLetters];
          newList[activeCellsRowIndex].isSubmitted = true;
          for (let i = 0; i < newList[activeCellsRowIndex].list.length; i++) {
            let word = newList[activeCellsRowIndex].list;
            let stringWord = word.join("");
            if (goalWord.includes(word[i])) {
              if (goalWord[i] === word[i]) {
                newLetterList1.push(word[i]);
              } else {
                newLetterList2.push(word[i]);
              }
            } else {
              newLetterList3.push(word[i]);
            }
            if (stringWord === goalWord) {
              setEndStatus("win");
            } else if (activeCellsRowIndex === 5) {
              setEndStatus("lose");
            }
          }
          setActiveCellsRowIndex((oldValue) => oldValue + 1);
          setActiveCellIndex(0);
          setCells(newList);
          setLetterWithCorrectPos(newLetterList1);
          setLetterWithIncorrectPos(newLetterList2);
          setWrongLetters(newLetterList3);
        }
      } else if (activeCellIndex < 5) {
        //add letter
        newList[activeCellsRowIndex].list[activeCellIndex] = key;
        setActiveCellIndex((oldValue) => oldValue + 1);
        setCells(newList);
      }
    }
  };

  return (
    <Box>
      <Header />
      <Body cells={cells} goalWord={goalWord} endStatus={endStatus} />
      <Keyboard
        selectKey={selectKey}
        letterWithCorrectPos={letterWithCorrectPos}
        letterWithIncorrectPos={letterWithIncorrectPos}
        wrongLetters={wrongLetters}
      />
    </Box>
  );
};

export default Wordle;
