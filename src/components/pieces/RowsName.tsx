import React from "react";

const RowsName: React.FC<{ rows: number[] }> = ({ rows }) => {
  return (
    <div className="board__rows-name">
      {rows.map((row) => (
        <span key={row}>{row}</span>
      ))}
    </div>
  );
};

export default RowsName;
