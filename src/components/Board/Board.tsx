import React from "react";
import Square from "../Square/Square";

type BoardProps = {
  squares: Array<string>;
  finished: boolean;
  onClick: (idx: number) => void;
};

const Board: React.FC<BoardProps> = (props) => {
  const renderSquare = (idx: number) => (
    <Square value={props.squares[idx]} onClick={() => props.onClick(idx)} />
  );
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
