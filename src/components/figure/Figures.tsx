import Figure from "./Figure";
import { copyPos } from "../../positions";

import React from "react";
import { useAppContext } from "../../context/Context";
import { makeMove } from "../../move";
const Figures = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { appState, dispatch } = useAppContext();

  const currentPosition: string[][] =
    appState.position[appState.position.length - 1];

  const getCoords = (e: React.DragEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { top, left, width } = ref.current.getBoundingClientRect();

      const size = width / 8;
      const y = Math.floor((e.clientX - left) / size);
      const x = 7 - Math.floor((e.clientY - top) / size);

      return { x, y };
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const newPos = copyPos(currentPosition);
    const coords = getCoords(e);
    if (coords) {
      const { x, y } = coords;
      const [p, row, column] = e.dataTransfer.getData("text").split(",") as [
        string,
        number,
        number
      ];
      console.log(p, row, column, x, y);
      newPos[row][column] = "";
      newPos[x][y] = p;
      dispatch(makeMove({ newPos }));
      console.log(newPos);
    }
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className="figures" onDrop={onDrop} onDragOver={onDragOver} ref={ref}>
      {currentPosition.map((r, row) =>
        r.map((c, column) =>
          currentPosition[row][column] ? (
            <Figure
              key={row + "-" + column}
              row={row}
              column={column}
              piece={currentPosition[row][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Figures;
