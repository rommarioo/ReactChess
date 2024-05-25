interface FigureProps {
  row: number;
  column: number;
  piece: string;
}

const Figure = ({ row, column, piece }: FigureProps) => {
  return (
    <div className={`figure ${piece} f-${row}${column}`} draggable={true}></div>
  );
};

export default Figure;
