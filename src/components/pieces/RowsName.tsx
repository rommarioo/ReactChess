import React from "react";

const RowsName: React.FC<{ rows: number[] }> = ({ rows }) => {
  return (
    <div className="board__rows-name">
      {rows.map((row) => (
        <div key={row}>{row}</div>
      ))}
    </div>
  );
};

export default RowsName;
