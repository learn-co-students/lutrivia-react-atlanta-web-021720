import React from 'react'

const HeadBar = (props) => {
    return (
    <div className="container">
        <button onClick={props.newGame} id="new-game" className="long-btn"><h2>New Game</h2></button>
        <h2 id="cur-score">Score: {props.score}</h2>
    </div>
    )
}

export default HeadBar