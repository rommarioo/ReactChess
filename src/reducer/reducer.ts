interface Action {
  type: string;
  payload: {
    newPos: string[][];
  };
}
export interface State {
  turn: string;
  position: Array<string[][]>;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "NEW_MOVE": {
      let { turn, position } = state;
      turn = turn === "White" ? "Black" : "White";
      position = [...position, action.payload.newPos];
      return {
        ...state,
        turn,
        position,
      };
    }
    default:
      return state;
  }
};

export default reducer;
