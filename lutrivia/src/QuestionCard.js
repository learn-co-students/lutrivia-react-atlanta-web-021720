import React from 'react'

class QuestionCard extends React.Component {

    state={
        wasClicked: false
    }

    renderAnswer = e => {
        if (this.state.wasClicked) {
            return
        }
        this.setState(prevState => ({wasClicked: true}))
        if (e.target.innerText.toLowerCase() === this.props.question.answer.toString()) {
            e.target.style.background = '#b4e854'
            this.props.addScore()
        } else {
            e.target.style.background = '#e34f4f'
        }
    }

    render() {
    return(
        <div className="q-card">
            <h3 >{this.props.question.text}</h3>
            <div className="container">
                <button onClick={this.renderAnswer} className="tf">True</button>
                <button onClick={this.renderAnswer} className="tf">False</button>
            </div>
        </div>
    )}
}

export default QuestionCard