import React from 'react';
import Trivia from './Trivia';
import SubmitForm from './SubmitForm';

class TriviaContainer extends React.Component {
    state = {  
        score: 0,
        name: ""
    }



    handleBtnClick = (event, question) => {
        if (event.target.value === question.answer.toString()) {
            event.target.style.backgroundColor = "green"
            this.setState(prevState => ({
                score: prevState.score + 1,
            }))
        }else {
            event.target.style.backgroundColor = "red"
        }
    }

    renderQuestions = () => {
        return this.props.data.map(question => 
            <Trivia key={question.text} questions={question} handleBtnClick={(event) => this.handleBtnClick(event, question)}/>
        )
    }

    handleInputChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleFormSubmit = () => {
        alert(`${this.state.name}, score is , ${this.state.score}`)
    }
    render() { 
        console.log(this.state.name)
        return (  
            <>
            <div>
                <h2>Score: {this.state.score}</h2>
                {this.renderQuestions()}
            </div>
            <SubmitForm 
            score={this.state.score}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}/>
            </>
        );
    }
}

export default TriviaContainer;