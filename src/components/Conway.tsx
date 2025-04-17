import { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

// Kind of brutal, but I drew this out, and then looked up the rows...
const name = new Map();
// prettier-ignore
name.set(7, new Set([4, 8, 11, 14, 17, 19, 22, 24, 27, 29, 34]));
//prettier-ignore
name.set(6, new Set([4, 6, 8, 11, 14, 19, 20, 21, 22, 24, 27, 25, 26, 29, 30, 31, 34]));
//prettier-ignore
name.set(5, new Set([4, 5, 7, 8, 11, 14, 17, 19, 22, 24, 27, 29, 34]));
//prettier-ignore
name.set(4, new Set([4, 8, 10, 11, 12, 16, 15, 19, 22, 25, 26, 29, 30, 31, 32, 34]));
//prettier-ignore
name.set(8, new Set([4, 8, 10, 11, 12, 15, 16, 19, 22, 24, 27, 29, 30, 31, 32, 34, 35, 36, 37]));
//prettier-ignore
name.set(10, new Set([4, 5, 6, 9, 10, 11, 15, 16, 19, 21, 20, 24, 26, 25, 29, 30, 31, 32, 34, 35, 36]));
//prettier-ignore
name.set(11, new Set([4, 7, 9, 12, 14, 17, 19, 22, 24, 27, 29, 34, 37]));
//prettier-ignore
name.set(12, new Set([4, 6, 5, 9, 11, 10, 17, 14, 19, 21, 20, 24, 26, 25, 29, 30, 31, 34, 36, 35]));
//prettier-ignore
name.set(13, new Set([4, 9, 11, 17, 14, 19, 22, 24, 27, 29, 34, 36]));
//prettier-ignore
name.set(14, new Set([4, 9, 12, 16, 15, 19, 20, 21, 24, 25, 26, 29, 30, 31, 32, 34, 37]));

type Props = {
  height: number;
  width: number;
};

type BoardType = Map<number, Set<number>>;

const isFilled = (x: number, y: number, board: BoardType) =>
  !!board.get(x)?.has(y);

const countNeighbors = (x: number, y: number, board: BoardType) => {
  let count = isFilled(x, y, board) ? -1 : 0;
  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      if (isFilled(i, j, board)) count++;
    }
  }

  return count;
};

const iterateBoard = (board: BoardType) => {
  const newBoard = new Map();
  board.forEach((row, n) => {
    row.forEach((m) => {
      for (let i = n - 1; i < n + 2; i++) {
        for (let j = m - 1; j < m + 2; j++) {
          const neighborCount = countNeighbors(i, j, board);
          if (neighborCount < 2 || neighborCount > 4) {
            continue;
          } else if (neighborCount === 3) {
            const row = newBoard.get(i) || new Set();
            row.add(j);
            newBoard.set(i, row);
          } else if (neighborCount === 2 && i === n && j === m) {
            const row = newBoard.get(i) || new Set();
            row.add(j);
            newBoard.set(i, row);
          }
        }
      }
    });
  });

  return newBoard;
};

const Conway = ({ height }: Props) => {
  const [board, setBoard] = useState<BoardType>(name);
  const [width, setWidth] = useState(1);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(true);
  const [pressed, setPressed] = useState(false);

  const clearCell = useCallback(
    (x: number, y: number) => {
      board.get(x)?.delete(y);
      setBoard(new Map(board));
    },
    [board]
  );

  const fillCell = useCallback(
    (x: number, y: number) => {
      const row = board.get(x) || new Set();
      row.add(y);
      board.set(x, row);
      setBoard(new Map(board));
    },
    [board, setBoard]
  );

  const toggleCell = useCallback(
    (x: number, y: number) => {
      if (isFilled(x, y, board)) clearCell(x, y);
      else fillCell(x, y);
    },
    [clearCell, fillCell]
  );

  const calculateWidth = useCallback(() => {
    if (!boardRef.current) {
      return;
    }
    setWidth(Math.floor(boardRef.current.clientWidth / 17));
  }, []);

  const onMouseOver = useCallback(
    (x: number, y: number) => {
      if (pressed) toggleCell(x, y);
    },
    [pressed, toggleCell]
  );

  const iterate = useCallback(() => {
    if (pausedRef.current === true) {
      return;
    }
    setBoard(iterateBoard);
    return setTimeout(iterate, 600);
  }, [pausedRef]);

  useEffect(() => {
    pausedRef.current = paused;
    iterate();
  }, [paused]);

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    const timeout = setTimeout(() => {
      console.log("unpausing");
      setPaused(false);
    }, 4000);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timeout);
    };
  }, []);

  const boardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Board
        ref={boardRef}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
      >
        {[...new Array(height)].map((_, i: number) => {
          return (
            <Row key={i}>
              {[...new Array(width)].map((_, j) => (
                <Cell
                  key={j}
                  onClick={() => toggleCell(i, j)}
                  onMouseOver={() => onMouseOver(i, j)}
                  $filled={isFilled(i, j, board)}
                ></Cell>
              ))}
            </Row>
          );
        })}
        {/* {board} */}
      </Board>
      <PausedDiv>
        <button onClick={() => setPaused((p) => !p)}>
          <ButtonIcon $isStopped={paused} />
        </button>
      </PausedDiv>
    </div>
  );
};

export default Conway;

const Board = styled.div`
  cursor: pointer;
  user-select: none;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ButtonIcon = styled.span<{ $isStopped: boolean }>`
  ${({ $isStopped }) =>
    $isStopped
      ? css`
          display: inline-block;
          background-color: #fff;
          height: 20px;
          width: 20px;

          &:before {
            animation: fadeIn 0.6s ease-in-out;
            background-color: #000;
            content: "";
            display: block;
            width: 25px;
            height: 10px;
            position: absolute;
            top: 2px;
            transform: rotate(30deg);
            transition: background-color 0.6s ease-in-out;
          }

          &:after {
            animation: fadeIn 0.6s ease-in-out;
            background-color: #000;
            content: "";
            display: block;
            width: 27px;
            height: 9px;
            position: absolute;
            bottom: 6px;
            transform: rotate(-30deg);
            transition: background-color 0.6s ease-in-out;
          }
        `
      : css`
          display: inline-block;
          background-color: #fff;
          height: 20px;
          width: 20px;

          &:before {
            background-color: transparent;
            content: "";
            display: block;
            width: 25px;
            height: 10px;
            position: absolute;
            top: 2px;
            transform: rotate(30deg);
            transition: background-color 0.6s ease-in-out;
          }

          &:after {
            background-color: transparent;
            content: "";
            display: block;
            width: 27px;
            height: 9px;
            position: absolute;
            bottom: 6px;
            transform: rotate(-30deg);
            transition: background-color 0.6s ease-in-out;
          }
        `}
`;

const PausedDiv = styled.div`
  z-index: 0;
  position: relative;
  text-align: right;
  top: -12px;
  margin-top: -35px;
  right: 15px;

  button {
    height: 35px;
    width: 60px;
    border-bottom-radius: 10px;
    border: none;
    background-color: #000;
    outline: none;
  }
`;

const Row = styled.div`
  height: 20px;
  background-color: #000;
`;

const Cell = styled.div<{ $filled: boolean }>`
  border: 1px solid #000;
  background-color: ${({ $filled }) => ($filled ? "#EFEFEF" : "#111")};
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;
