import React, { useState, useRef, useMemo } from 'react';
import "./style.css";

const rowStyle = {
  display: 'flex',
  width:'205px',
  height:'205px',
  flexDirection:'row',
  flexWrap:'wrap',
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white',
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({onPlayerClick, mark}) {
  return (
    <div
      className={(mark) ? `square ${mark}` : `square`}
      style={squareStyle} onClick={onPlayerClick}>
      {mark}
    </div>
  );
}

function handleWinner(squares) {
  console.log(squares);
  let combinations = {
    across: [
      [0,1,2],
      [3,4,5],
      [6,7,8]
    ],
    down:[
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ],
    diagnol:[
      [0,4,8],
      [2,4,6]
    ]
  };
  let win = false;
  for(let combo in combinations) {
    combinations[combo].every((pattern)=>{
      console.log(squares[pattern[0]], squares[pattern[1]],  squares[pattern[2]]);
      if(squares[pattern[0]] === null || squares[pattern[1] === null || squares[pattern[2] === null]]) {
        win = false;
        return true;
      } else if(
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]) {
            win = squares[pattern[1]]
          return false;
      } else {
        return true;
      }
    });
    if(win) {
      return win;
    }
  }
  return win;
}
function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('None');
  const onPlayerClick = (currentIndex) => {
    if(squares[currentIndex] !== null) {
      return false;
    }
    squares[currentIndex] = player;
    const sq = [...squares];

    const win = handleWinner(sq);
    console.log(win);
    if(win) {
      setWinner(win);
      return true;
    }
    setSquares(sq);
    setPlayer(player === 'X' ? 'O' : 'X');
  }
  
  const reset = () => {
      setWinner(null);
      setSquares(new Array(9).fill(null));
      setPlayer('X');
  }
  return (
    <div style={containerStyle} className="gameBoard">
      <div 
        id="statusArea" 
        className="status"
        style={instructionsStyle}>

        Next player: <span> {player} </span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: 
      <span className={(winner) ? `${winner}` : 'default'} >{winner}</span></div>
      <button style={buttonStyle} onClick={reset}>Reset</button>
      <div style={boardStyle}>
      <div className="board-row" style={rowStyle}>
        {squares.map((s, index)=>{
          return (
            <Square onPlayerClick={()=>onPlayerClick(index)} mark={s} key={index} />
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
