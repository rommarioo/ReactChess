import React from "react";

const ColumnsName: React.FC<{ columns: string[] }> = ({ columns }) => {
  return (
    <div className="board__columns-name">
      {columns.map((column) => (
        <div key={column}>{column}</div>
      ))}
    </div>
  );
};

export default ColumnsName;
