import React, { useState } from "react";
import Board from './components/Board';
import History from './components/History';
import MessageSet from './components/MessageSet';
import { calculateWinner } from "./helpers";

import './styles/root.scss'

const App = () => {

  const [history,setHistory] = useState([
    {board: Array(9).fill(null), isXNext: true }
  ]);

  const [currentMove,setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner, winningSquares} = calculateWinner(current.board);
  

    
  // const setMessage = () => {
  //   if(winner!=null){
      
  //     return `Winner is ${winner}`;
  //   }else{
  //     if(!current.board.includes(null)){
  //       return `Match is Tie`;
  //     }else{
  //       return `Next player is ${current.isXNext ? 'X' : 'O'}`;
  //     }
  //   }
  // }

  // const message = setMessage();

  const handleSquareClick = (position) => {                                //Handles whether the sign is O or X 
      if(current.board[position] || winner){
          return;
      }
      
      setHistory( (prev)=>{
        const last = prev[prev.length-1]
        const newBoard = last.board.map((square,pos)=>{
              if(position === pos){
                  if(last.isXNext){
                      return 'X';
                  }else{
                      return 'O';
                  }
              }
              return square;
          });
          return prev.concat({board: newBoard, isXNext:!last.isXNext});
      } )
      setCurrentMove(prev => prev+1);
  }
  const moveTo = (move) => {
    setCurrentMove(move);
  }
  const onNewGame = () => {
    setHistory([
      {board: Array(9).fill(null), isXNext: true }
    ]);
    setCurrentMove(0);
  } 

  return (
    <div className = "app">
      <h1>TIC <span className="text-green">TAC</span> TOE!</h1>
      <MessageSet winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active':''}`}>Start new game</button>
      <h2 style={{
        fontWeight: 'normal'
      }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} winner={winner} current={current} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
