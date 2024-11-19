const allEqual = (arr: (string | null)[]) =>
  !!arr[0] && arr.every((val) => val !== "" && val === arr[0]);

export const checkWinner = (board: (string | null)[][]) => {
  const size = board.length;

  // Check rows
  for (let row = 0; row < size; row++) {
    if (allEqual(board[row])) {
      return board[row][0];
    }
  }

  // Check columns
  for (let col = 0; col < size; col++) {
    const column = [];

    for (let row = 0; row < size; row++) {
      column.push(board[row][col]);
    }

    if (allEqual(column)) {
      return column[0];
    }
  }

  // Check diagonal
  let mainDiagonal = [];
  let antiDiagonal = [];

  for (let i = 0; i < size; i++) {
    mainDiagonal.push(board[i][i]);
    antiDiagonal.push(board[i][size - 1 - i]);
  }

  if (allEqual(mainDiagonal)) {
    return mainDiagonal[0];
  }

  if (allEqual(antiDiagonal)) {
    return antiDiagonal[0];
  }

  return null;
};

const BOARD_3X3 = [
  ["O", "X", "X"],
  ["O", "O", "X"],
  ["X", "O", "X"],
];

const BOARD_5X5 = [
  ["O", "O", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "X", "O", "O"],
];

const BOARD = BOARD_3X3;

const winner = checkWinner(BOARD);

console.log("winner", winner);
