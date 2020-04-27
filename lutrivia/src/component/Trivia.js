import React from "react";

const Trivia = (props) => {
    return (
        <div className="triviaQuestion">
            <h1 id="propHeader">{props.question.text}</h1>
            <button className="trueFalseBtns" name="true" onClick={(event) => props.handleClick(event, props.question)}>True</button><button className="trueFalseBtns" onClick={(event) => props.handleClick(event, props.question)} name="false">False</button>
        </div>
    )
}

export default Trivia