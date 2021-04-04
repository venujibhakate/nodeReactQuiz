import React from 'react';
import "./Question.css";
  
const Score = ({score, playAgain,wrong,count}) => {
  return(
  <div>
    <h3 class="mistakes">You have made {wrong} mistakes</h3>
    <h1 class="count">played this game {count} times</h1>
    <button className="Reset" onClick={playAgain} > Play Again </button>
  </div>
)}
export default Score;
