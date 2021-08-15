import React from 'react';
import './App.css';
import InputComponent from './inputComponent.js';
import MyReactModal from './reactModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queriesArray: [],
      queries: [
        {
          "query": "What is the name of India's National game?",
          "options": ["Hockey", "Cricket", "Badminton", "Football"],
          "ans": "Hockey"
        },
        {
          "query": "What is the name of India's National bird?",
          "options": ["Peacock", "Seagull", "Woodpecker", "Owl"],
          "ans": "Peacock"
        },
      ],
      activeRadioVal: null,
      counter: 0,
      score: 0,
      showModal: false,
      gameOver: false,
      isLoaded: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          queriesArray: result
        })
      },
        (error) => {
          this.setState({ isLoaded: true, error })
        }
      )
  }

  componentDidUpdate() {
    console.log(`queries length :: ${this.state.queriesArray.length}`);
  }

  handleToggle(e) {
    this.setState({ activeRadioVal: e.target.value })
    console.log(e.target.value);
  }

  handleModalClose(e) {
    console.log("Modal close handler ");
    this.setState({ showModal: !this.state.showModal });
  }

  handleSubmit(e) {
    e.preventDefault();
    const queries = this.state.queries;
    let counter = this.state.counter;
    const activeRadioVal = this.state.activeRadioVal;
    let score = this.state.score;

    if (counter === queries.length - 1) {
      if (activeRadioVal === queries[counter].ans) {
        this.setState({ gameOver: true, score: score + 50, showModal: true });
      } else {
        this.setState({ gameOver: true, score: score, showModal: true });
      }
    }

    if (counter < queries.length && counter !== queries.length - 1) {

      if (activeRadioVal === queries[counter].ans) {
        score = score + 50;
      }

      this.setState({ counter: counter + 1, score: score, activeRadioVal: null });
    }

  }

  render() {
    const activeRadioVal = this.state.activeRadioVal;
    const counter = this.state.counter;
    const queries = this.state.queries;
    return (

      <div className="m-2">
        <h1 className="display-1 text-center bg-dark py-4 text-white">quizzo</h1>
        <div className="body-container">
          <div className="d-flex justify-content-between">
            <div className="bg-secondary-custom text-center px-2 box-shadow-custom"><h2>Question {this.state.counter + 1} of {queries.length}</h2></div>
            <div className="bg-secondary-custom text-center px-2 box-shadow-custom"><h2>00:12:23</h2></div>
          </div>
          <div className="question-box box-shadow-custom bg-secondary-custom "><h5>{queries[counter].query}</h5></div>
          <br />
          <h6>Please choose one of the following options</h6>
          <hr />
          <InputComponent name="inputcomponent1" id="id1" optionval={queries[counter].options[0]} isChecked={queries[counter].options[0] === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent2" id="id2" optionval={queries[counter].options[1]} isChecked={queries[counter].options[1] === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent3" id="id3" optionval={queries[counter].options[2]} isChecked={queries[counter].options[2] === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent4" id="id4" optionval={queries[counter].options[3]} isChecked={queries[counter].options[3] === activeRadioVal} onChange={this.handleToggle} />
          <hr />
          <div className="d-flex justify-content-end">
            <button class="btn btn-primary submit-btn flex-end" type="submit" onClick={this.handleSubmit} disabled={activeRadioVal == null || this.state.gameOver}>Submit</button>
          </div>
        </div>
        {this.state.showModal && <MyReactModal showModal={this.state.showModal} score={this.state.score} handleModalClose={this.handleModalClose} />}
      </div>
    );
  }
}

export default App;
