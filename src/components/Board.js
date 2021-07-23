import React, { useState } from 'react' //useState is a hook to use the components more easily
import Square from './Square';

const Board = () => {

    const [board,setBoard] = useState(Array(9).fill(null));  //We define array using Array(size) in react js.
    const [isXNext,setIsXNext] = useState(false);           //We do it to check whether the next sign is X or not.


    const handleSquareClick = (position) => {                                //Handles whether the sign is O or X 
        if(board[position]){
            return;
        }
        
        setBoard( (prev)=>{
            return prev.map((square,pos)=>{
                if(position === pos){
                    return isXNext ? 'X' : 'O';
                }
                return square;
            })
        } )

        setIsXNext(prev => !prev);
    }

    const renderSquare = position => {                 // handles click on all the squares
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
