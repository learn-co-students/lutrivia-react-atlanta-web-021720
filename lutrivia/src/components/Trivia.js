import React from 'react';

const Trivia = (props) => {
    return (  
        <div className="questions">
            <h3>{props.questions.text}</h3>
            <div className="answer_btn">
                <button onClick={props.handleBtnClick} value={true}>True</button> 
                <button onClick={props.handleBtnClick} value={false}>False</button>
            </div>
        </div>
    );
}

export default Trivia;