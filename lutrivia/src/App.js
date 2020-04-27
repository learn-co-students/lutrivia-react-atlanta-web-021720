import React from 'react';
import questions from './data'
import Header from './component/Header'
import TriviaContainer from './container/TriviaContainer'
import Footer from './component/Footer'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: questions.questions
    }
  }

  TriviaSlicer = () => {
    return this.state.triviaQuestions.slice(0, 4)
  }

  handleClick = (event, question) => {
    let answer = event.target.name
    let questionAnswer = question.answer.toString()
    console.log("Event:", event.target.name)
    console.log("Question:", question)
    answer === questionAnswer ? event.target.style.background = "lightgreen" : event.target.style.background = "red"
  }

  render() {
    this.TriviaSlicer()
    return (
      <div>
        <div className="AppContainer">
          <Header />
          <TriviaContainer
            triviaQuestions={this.TriviaSlicer()}
            handleClick={this.handleClick} />
          <Footer />
        </div >
      </div>
    );
  }
}


