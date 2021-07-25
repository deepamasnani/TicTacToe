import React, { useState } from "react";
import Board from './components/Board';
import { calculateWinner } from "./helpers";

import './styles/root.scss'

const App = () => {

  const [board,setBoard] = useState(Array(9).fill(null));  //We define array using Array(size) in react js.
  const [isXNext,setIsXNext] = useState(true);           //We do it to check whether the next sign is X or not.

  const winner = calculateWinner(board);

  const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`

  const handleSquareClick = (position) => {                                //Handles whether the sign is O or X 
      if(board[position] || winner){
          return;
      }
      
      setBoard( (prev)=>{
          return prev.map((square,pos)=>{
              if(position === pos){
                  if(isXNext){
                      return 'X';
                  }else{
                      return 'O';
                  }
              }
              return square;
          })
      } )

      setIsXNext(prev => !prev);
  }

  return (
    <div className = "app">
      <h1>TIC TAC TOE!</h1>
      <h2>{ message }</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      
    </div>
  );
};

export default App;
