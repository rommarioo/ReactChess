import React from "react";
import RowsName from "./pieces/RowsName";
import ColumnsName from "./pieces/ColumnsName";
import Figures from "./figure/Figures";

const Board: React.FC = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  console.log(rows);
  console.log(columns);
  const getClassName = (i: number, j: number) => {
    const c = (i + j) % 2 === 0 ? "board__cells-light" : "board__cells-dark";
    return c;
  };
  return (
    <div className="board">
      <RowsName rows={rows} />
      <div className="board__cells">
        {rows.map((row, i) =>
          columns.map((column, j) => (
            <div key={`${row}-${column}`} className={getClassName(i, j)}></div>
          ))
        )}
      </div>
      <Figures />
      <ColumnsName columns={columns} />
    </div>
  );
};

export default Board;
