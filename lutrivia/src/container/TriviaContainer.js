import React from "react";
import Trivia from "../component/Trivia"

const TriviaContainer = (props) => {
    console.log("Trivia Container: ", props.triviaQuestions)
    let questions = props.triviaQuestions
    return <div>
        {questions.map(question => {
            return <Trivia question={question} handleClick={props.handleClick} />
        })}
    </div>
}


export default TriviaContainer