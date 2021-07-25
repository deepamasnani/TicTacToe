import React, { useState } from 'react' //useState is a hook to use the components more easily
import Square from './Square';

const Board = ({board , handleSquareClick}) => {

    const renderSquare = (position) => {                 // handles click on all the squares
        return (
          <Square
            value={board[position]}
            onClick={() => handleSquareClick(position)}
          />
        );
      };
    
      return (
        <div className="board">
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
