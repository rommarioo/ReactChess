import { createContext, useContext } from "react";

export type Action = {
  type: string;
  payload: { newPos: string[][] };
};

const AppContext = createContext({
  appState: {
    position: [[]],
    turn: "",
  },
  /*eslint-disable */
  dispatch: (action: Action) => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContext;
