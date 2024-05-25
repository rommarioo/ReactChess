import Figure from "./Figure";
import createPosition from "../../positions";
import { useState } from "react";
const Figures = () => {
  const [position, setPosition] = useState<string[][]>(createPosition());
  return (
    <div className="figures">
      {position.map((r, row) =>
        r.map((c, column) =>
          position[row][column] ? (
            <Figure
              key={row + "-" + column}
              row={row}
              column={column}
              piece={position[row][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Figures;
