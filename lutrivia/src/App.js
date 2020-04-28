import React from 'react';
import TriviaContainer from './components/TriviaContainer';
import data from './data';

class App extends React.Component {

  state = {
    questionData: this.getRandom(data.questions, 4)
  }

  getRandom(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  handleNewGame = () => {
    this.setState({
      questionData: this.getRandom(data.questions, 4)
    })
  }

  render() {
    return (
      <div>
        <h1>Lutrivia</h1>
        <button onClick={this.handleNewGame}>New Game</button>
        <TriviaContainer 
        data={this.state.questionData}/>
      </div>
    );
  }
}

export default App;
