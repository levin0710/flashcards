import React, { useState } from "react";

const Card = (props) => {
    const[flip, setFlip] = useState(false);
    return (
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
    )
}

export default Card;