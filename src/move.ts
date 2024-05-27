export const makeMove = ({ newPos }: { newPos: string[][] }) => {
  return {
    type: "NEW_MOVE",
    payload: { newPos },
  };
};
