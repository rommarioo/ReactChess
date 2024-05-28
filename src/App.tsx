import { useReducer } from "react";
import Board from "./components/Board";
import AppContext from "./context/Context";
import reducer from "./reducer/reducer";
import { initPosition } from "./positions";

function App() {
  const [appState, dispatch] = useReducer(reducer, initPosition);
  const providerState = { appState, dispatch };
  return (
    // @ts-ignore
    <AppContext.Provider value={providerState}>
      <div className="app">
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
