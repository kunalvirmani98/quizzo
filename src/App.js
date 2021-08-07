import React from 'react';
import './App.css';
import InputComponent from './inputComponent.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRadioVal: "gaming"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({ activeRadioVal: e.target.value })
    console.log(e.target.value);
  }

  render() {
    const activeRadioVal = this.state.activeRadioVal;
    return (
      <div className="m-2" >
        <h1 className="display-1 text-center bg-info py-4">quizzo</h1>
        <div className="body-container">
          <div className="d-flex justify-content-between">
            <div className="bg-secondary-custom text-center px-2"><h2>Question 1 of 10</h2></div>
            <div className="bg-secondary-custom text-center px-2"><h2>00:12:23</h2></div>
          </div>
          <div className="question-box"><h2>What’s your favorite way to spend a day off?</h2></div>
          <br />
          <h4>Please choose one of the following options</h4>
          <hr />
          <InputComponent name="inputcomponent1" id="id1" optionval="gaming" isChecked={"gaming" === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent2" id="id2" optionval="netflix and chill" isChecked={"netflix and chill" === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent3" id="id3" optionval="travelling" isChecked={"travelling" === activeRadioVal} onChange={this.handleToggle} />
          <InputComponent name="inputcomponent4" id="id4" optionval="reading" isChecked={"reading" === activeRadioVal} onChange={this.handleToggle} />
          <hr />
          <div className="d-flex justify-content-end"><button class="btn btn-primary submit-btn flex-end" type="submit">Submit</button></div>
        </div>

      </div>
    );
  }
}

export default App;
