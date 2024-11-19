import { checkWinner } from "../tic-tac-toe"; // Adjust the path if needed

describe("Tic-Tac-Toe checkWinner function", () => {
  test("detects horizontal win for X", () => {
    const board = [
      ["X", "X", "X"],
      ["O", "O", null],
      [null, null, null],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  test("detects vertical win for O", () => {
    const board = [
      ["X", "O", null],
      ["X", "O", null],
      [null, "O", null],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  test("detects diagonal win for X", () => {
    const board = [
      ["X", "O", null],
      [null, "X", "O"],
      [null, null, "X"],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  test("returns null when there is no winner", () => {
    const board = [
      ["X", "O", "X"],
      ["X", "O", "O"],
      ["O", "X", "X"],
    ];
    expect(checkWinner(board)).toBe(null);
  });

  test("returns null for an empty board", () => {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(checkWinner(board)).toBe(null);
  });

  test("detects 4-in-a-row horizontal win for X in a 4x4 board", () => {
    const board = [
      ["X", "X", "X", "X"],
      [null, "O", "O", null],
      [null, null, "O", null],
      [null, null, null, null],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  test("detects 4-in-a-row vertical win for O in a 4x4 board", () => {
    const board = [
      ["X", "O", null, null],
      ["X", "O", null, null],
      ["X", "O", null, null],
      [null, "O", null, null],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  test("detects 4-in-a-row diagonal win for X in a 4x4 board", () => {
    const board = [
      ["X", "O", null, null],
      [null, "X", "O", null],
      [null, null, "X", "O"],
      [null, null, null, "X"],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  test("detects 5-in-a-row horizontal win for O in a 5x5 board", () => {
    const board = [
      [null, null, null, null, null],
      ["O", "O", "O", "O", "O"],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  test("returns null when there is no winner on a 5x5 board", () => {
    const board = [
      ["X", "O", "X", "O", "X"],
      ["O", "X", "O", "X", "O"],
      ["X", "O", null, "O", "X"],
      ["O", "X", "O", "X", "O"],
      ["X", "O", "X", "O", "X"],
    ];
    expect(checkWinner(board)).toBe(null);
  });
});
