import React from 'react'

class ScoreForm extends React.Component {
    state = {
        name: ""
    }

    handleChange = e => {
        this.setState({ name: e.target.value})
    }

    render () {
        return (
            <form className="container form">
                <input type="text" onChange={this.handleChange} value={this.state.name}/>
                <button className="long-btn"><h2>Submit score</h2></button>
            </form>
    )}
}

export default ScoreForm