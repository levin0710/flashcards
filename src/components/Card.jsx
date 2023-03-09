import React, { useState } from "react";
import './Card.css'
import GuessForm from "./GuessForm";

const Card = (props) => {
    const[flip, setFlip] = useState(false);
    const submitForm = (userInput) => {
        
        if (!flip){
            if (props.flashcard.song.toLowerCase().includes(userInput.toLowerCase())){
                setFlip(true)
                return true;
            }
        setFlip(true)
        return false;
        }
        return null
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
            <GuessForm submitForm={submitForm} />
        </div>
    )
}

export default Card;