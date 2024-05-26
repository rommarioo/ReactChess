import Figure from "./Figure";
import createPosition, { copyPos } from "../../positions";
import { useState } from "react";
import React from "react";
const Figures = () => {
  const [pos, setPos] = useState<string[][]>(createPosition());

  const ref = React.useRef<HTMLDivElement>(null);

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
    const newPos = copyPos(pos);
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
      setPos(newPos);
      console.log(newPos);
    }
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className="figures" onDrop={onDrop} onDragOver={onDragOver} ref={ref}>
      {pos.map((r, row) =>
        r.map((c, column) =>
          pos[row][column] ? (
            <Figure
              key={row + "-" + column}
              row={row}
              column={column}
              piece={pos[row][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Figures;
