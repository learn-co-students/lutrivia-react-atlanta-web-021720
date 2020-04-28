import React, {Fragment} from 'react';
import HeadBar from './HeadBar'
import QuestionCard from './QuestionCard'
import ScoreForm from './ScoreForm'
import questions from './data.js'

class QuizContainer extends React.Component{

    state = {
        score: 0,
    }

    addScore = () => {
        this.setState({score: this.state.score + 1})
    }

    newGame = () => {
        this.setState({})
    }

    render() {
    return(
        <>
            <HeadBar score={this.state.score} newGame={this.newGame}/>
            {questions.map( (question, ind) => 
            <QuestionCard key={ind} 
                question={question} 
                addScore={this.addScore}/>)}
            <ScoreForm />
        </>
    )}
}

export default QuizContainer