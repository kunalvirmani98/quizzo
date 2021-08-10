import React from 'react';
import './App.css';
import InputComponent from './inputComponent.js';
import MyReactModal from './reactModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      counter: 1,
      score: 0,
      showModal: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle(e) {
    this.setState({ activeRadioVal: e.target.value })
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const queries = this.state.queries;
    let counter = this.state.counter;
    const activeradioval = this.state.activeradioval;
    let score = this.state.score;

    if (counter === queries.length) {
      this.setState({ counter: counter + 1, score: score, activeRadioVal: null, showModal: true });
    }

    if (counter < queries.length) {

      if (activeradioval === queries[counter].ans) {
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
            <div className="bg-secondary-custom text-center px-2 box-shadow-custom"><h2>Question {this.state.counter} of {queries.length}</h2></div>
            <div className="bg-secondary-custom text-center px-2 box-shadow-custom"><h2>00:12:23</h2></div>
          </div>
          <div className="question-box box-shadow-custom bg-secondary-custom "><h5>{queries[counter - 1].query}</h5></div>
          <br />
          <h6>Please choose one of the following options</h6>
          <hr />
          <InputComponent name="inputcomponent1" id="id1" optionval={queries[counter - 1].options[0]} isChecked={queries[counter - 1].options[0] === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent2" id="id2" optionval={queries[counter - 1].options[1]} isChecked={queries[counter - 1].options[1] === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent3" id="id3" optionval={queries[counter - 1].options[2]} isChecked={queries[counter - 1].options[2] === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent4" id="id4" optionval={queries[counter - 1].options[3]} isChecked={queries[counter - 1].options[3] === activeRadioVal} onChange={this.handleToggle} />
          <hr />
          <div className="d-flex justify-content-end">
            <button class="btn btn-primary submit-btn flex-end" type="submit" onClick={this.handleSubmit} disabled={activeRadioVal == null}>Submit</button>
          </div>
        </div>
        {this.state.showModal && <div><MyReactModal /></div>}
      </div>
    );
  }
}

export default App;
