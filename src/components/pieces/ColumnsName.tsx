import React from "react";

const ColumnsName: React.FC<{ columns: string[] }> = ({ columns }) => {
  return (
    <div className="board__columns-name">
      {columns.map((column) => (
        <span key={column}>{column}</span>
      ))}
    </div>
  );
};

export default ColumnsName;
