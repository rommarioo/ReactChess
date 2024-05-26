import React from "react";
interface FigureProps {
  row: number;
  column: number;
  piece: string;
}

const Figure = ({ row, column, piece }: FigureProps) => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece},${row},${column}`);
    setTimeout(() => {
      (e.target as HTMLDivElement).style.display = "none";
    }, 0);
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target) {
      (e.target as HTMLDivElement).style.display = "block";
    }
  };
  return (
    <div
      className={`figure ${piece} p-${column}${row}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    ></div>
  );
};

export default Figure;
