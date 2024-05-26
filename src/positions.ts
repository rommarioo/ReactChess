const createPosition = () => {
  const position: string[][] = new Array(8)
    .fill("")
    .map(() => new Array(8).fill(""));
  //white figures
  position[0][0] = "RookSideBlack";
  position[0][1] = "KnightSideBlack";
  position[0][2] = "BishopSideBlack";
  position[0][3] = "QueenSideBlack";
  position[0][4] = "KingSideBlack";
  position[0][5] = "BishopSideBlack";
  position[0][6] = "KnightSideBlack";
  position[0][7] = "RookSideBlack";

  position[1][0] = "PawnSideBlack";
  position[1][1] = "PawnSideBlack";
  position[1][2] = "PawnSideBlack";
  position[1][3] = "PawnSideBlack";
  position[1][4] = "PawnSideBlack";
  position[1][5] = "PawnSideBlack";
  position[1][6] = "PawnSideBlack";
  position[1][7] = "PawnSideBlack";
  //black figures
  position[7][0] = "RookSideWhite";
  position[7][1] = "KnightSideWhite";
  position[7][2] = "BishopSideWhite";
  position[7][3] = "QueenSideWhite";
  position[7][4] = "KingSideWhite";
  position[7][5] = "BishopSideWhite";
  position[7][6] = "KnightSideWhite";
  position[7][7] = "RookSideWhite";

  position[6][0] = "PawnSideWhite";
  position[6][1] = "PawnSideWhite";
  position[6][2] = "PawnSideWhite";
  position[6][3] = "PawnSideWhite";
  position[6][4] = "PawnSideWhite";
  position[6][5] = "PawnSideWhite";
  position[6][6] = "PawnSideWhite";
  position[6][7] = "PawnSideWhite";

  return position;
};

export const copyPos = (position: string[][]) => {
  const newPosition: string[][] = new Array(8)
    .fill("")
    .map(() => new Array(8).fill(""));

  for (let row = 0; row < position.length; row++) {
    for (let column = 0; column < position[0].length; column++) {
      newPosition[row][column] = position[row][column];
    }
  }

  return newPosition;
};

export default createPosition;
