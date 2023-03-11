import React, { useState } from "react";
import './Card.css'
import GuessForm from "./GuessForm";

const Card = (props) => {
    const[flip, setFlip] = useState(false);
    const submitForm = (userInput) => {
        const MAX_EDIT_DISTANCE = 3;
        if (!flip){
          const songName = props.flashcard.song.toLowerCase();
          const input = userInput.toLowerCase();
          if (input.length == 0) {
            return null;
          }
          if (songName.includes(input) || editDistance(songName, input) <= MAX_EDIT_DISTANCE){
            setFlip(true);
            return true;
          }
          setFlip(true);
          return false;
        }
        return null;
      }
      
      function editDistance(str1, str2) {
        const m = str1.length, n = str2.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
        for (let i = 0; i <= m; i++) {
          for (let j = 0; j <= n; j++) {
            if (i === 0) dp[i][j] = j;
            else if (j === 0) dp[i][j] = i;
            else if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
          }
        }
        return dp[m][n];
      }
      
    return (
        <div>
            <div className="container">
                <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} onLoad={() => setFlip(false)}>
                    <div className="front">
                        <div>
                            {props.flashcard.artist}
                        </div>
                        <img src={props.flashcard.face}></img>
                    </div>
                    <div className="back">
                        <div>
                            {props.flashcard.song}
                        </div>
                        <img className="image" src={props.flashcard.cover}></img>
                    </div>       
                </div>
            </div>
            <GuessForm className='form' submitForm={submitForm} />
        </div>
    )
}

export default Card;