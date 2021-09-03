import { hidden } from "ansi-colors";
import React, {useState} from "react";
import {calculateWinner} from './helper'

import Board from './components/Board'
import History from './components/History'
import Message from "./components/Message";

import './styles/root.scss'

const NEW_GAME = [{board:Array(9).fill(null),isNext:true}];

function App(){
const [history,setHistory] = useState(NEW_GAME)
const [currentMove,setCurrentMove] = useState(0);

const current = history[currentMove];


const {winner,winingSquares} = calculateWinner(current.board);

const handleOnClick = (position)=>{
    if(current.board[position] || winner){
        return;
    }
    setHistory((prev)=>{
      const last = prev[prev.length-1]

        const newBoard = last.board.map((square,pos)=>{
            if(pos === position){
                return last.isNext ? 'O':'X';
            }
            return square;
        })
        return prev.concat({board:newBoard,isNext:!last.isNext})
    })
    setCurrentMove(prev=>prev+1)
};

const startGame = ()=>{
  setHistory(NEW_GAME);
  setCurrentMove(0);
}

const moveTo =(move)=>{
  setCurrentMove(move);
};
  return (
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <Message winner={winner} current={current}/>
    <Board board={current.board} isNext={current.isNext} handleOnClick={handleOnClick} winingSquares={winingSquares}/>
    <button className="btn-reset" type="button" onClick={startGame}>Start Game</button>
     <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  )
}

export default App;