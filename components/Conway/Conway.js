import React, { Component } from 'react';
import styles from './conway.css';

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
  height: number,
};
export default class Conway extends Component<Props> {
  state = {
    board: name,
    width: 0,
    paused: true,
    pressed: false,
  };

  componentDidMount() {
    // run one iteration every 200 ms
    const timeout = () => {
      if (!this.state.paused) this.iterate();
      setTimeout(timeout, 200);
    };
    this.timeout = setTimeout(timeout, 200);

    // if the screen resizes, update the dimensions of the board
    const updateDimensions = () => {
      this.setState({
        width: this.board.clientWidth / 17,
      });
    };
    window.addEventListener('resize', () => setTimeout(updateDimensions));
    setTimeout(updateDimensions);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    window.removeEventListener('resize');
  }

  fillCell(x, y, board) {
    const myBoard = board || this.state.board;
    let row;
    if (myBoard.get(x)) {
      row = myBoard.get(x);
    } else {
      row = new Set();
      myBoard.set(x, row);
    }
    row.add(y);
    if (!board) {
      this.setState({ board: myBoard });
    }
  }

  isFilled(x, y, b) {
    const board = b || this.state.board;
    return board.get(x) && board.get(x).has(y);
  }

  clearCell(x, y, board) {
    const myBoard = board || this.state.board;
    if (this.isFilled(x, y, myBoard)) {
      myBoard.get(x).delete(y);
    }
    if (!board) {
      this.setState({ board: myBoard });
    }
  }

  countNeighbors(x, y, board) {
    let count = this.isFilled(x, y, board) ? -1 : 0;
    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        if (this.isFilled(i, j, board)) count++;
      }
    }
    return count;
  }

  iterate() {
    const board = new Map();
    this.state.board.forEach((row, n) => {
      row.forEach(m => {
        for (let i = n - 1; i < n + 2; i++) {
          for (let j = m - 1; j < m + 2; j++) {
            const neighborCount = this.countNeighbors(i, j, this.state.board);
            if (neighborCount < 2 || neighborCount > 4) {
              this.clearCell(i, j, board);
            } else if (neighborCount === 3) {
              this.fillCell(i, j, board);
            } else if (neighborCount === 2 && i === n && j === m) {
              this.fillCell(i, j, board);
            }
          }
        }
      });
    });
    this.setState({ board });
  }

  render() {
    const { height } = this.props;
    const { board, width } = this.state;
    const myBoard = [];
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(
          <div
            key={j}
            className={
              styles.cell +
              ' ' +
              (this.isFilled(i, j, board) ? styles.filled : '')
            }
            onClick={() =>
              this.isFilled(i, j) ? this.clearCell(i, j) : this.fillCell(i, j)
            }
            onMouseOver={() =>
              this.state.pressed &&
              (!this.isFilled(i, j, board)
                ? this.fillCell(i, j)
                : this.emptyCell(i, j))
            }
          />,
        );
      }
      myBoard.push(
        <div className={styles.row} key={i}>
          {row}
        </div>,
      );
    }
    return (
      <div>
        <div
          className={styles.board}
          ref={board => (this.board = board)}
          onMouseDown={() => this.setState({ pressed: true })}
          onMouseUp={() => this.setState({ pressed: false })}
          onMouseLeave={() => this.setState({ pressed: false })}
        >
          {myBoard}
        </div>
        <div className={styles.pauseDiv}>
          <button
            onClick={() =>
              this.setState({
                paused: !this.state.paused,
              })
            }
          >
            <span
              className={this.state.paused ? styles.stopped : styles.playing}
            />
          </button>
        </div>
      </div>
    );
  }
}
