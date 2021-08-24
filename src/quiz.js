import React from 'react';
import './App.css';
import InputComponent from './inputComponent.js';
import MyReactModal from './reactModal';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queriesArray: [],
            queries: [
                {
                    "question": "What is the name of India's National game?",
                    "allOptions": ["Hockey", "Cricket", "Badminton", "Football"],
                    "correct_anwer": "Hockey"
                },
                {
                    "question": "What is the name of India's National bird?",
                    "allOptions": ["Peacock", "Seagull", "Woodpecker", "Owl"],
                    "correct_answer": "Peacock"
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
            .then((resp) => {
                for (let i = 0; i < 10; i++) {
                    resp.results[i].allOptions = [...resp.results[i].incorrect_answers, resp.results[i].correct_answer];
                    // resp.results[i].allOptions = [];
                    let formattedString = resp.results[i].question.replaceAll(/(&rdquo;)/g, '"');
                    formattedString = resp.results[i].question.replaceAll(/(&quot;)/g, "'");
                    resp.results[i].question = formattedString;
                }
                this.setState({
                    isLoaded: true,
                    queries: resp.results
                })
            },
                (error) => {
                    this.setState({ isLoaded: true, error })
                }
            )

        this.props.changeActivePage('quiz');
    }

    componentDidUpdate() {
        this.state.queriesArray.forEach(query => console.log(query))
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
            if (activeRadioVal === queries[counter].correct_answer) {
                this.setState({ gameOver: true, score: score + 50, showModal: true });
            } else {
                this.setState({ gameOver: true, score: score, showModal: true });
            }
        }

        if (counter < queries.length && counter !== queries.length - 1) {

            if (activeRadioVal === queries[counter].correct_answer) {
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

            <div className="body-container border-custom">
                <div className="d-flex justify-content-between">
                    <div className="bg-secondary-custom text-center px-2 box-shadow-custom"><h2>Question {this.state.counter + 1} of 10</h2></div>
                    <div className="bg-secondary-custom text-center px-2 box-shadow-custom"><h2>00:12:23</h2></div>
                </div>
                <div className="question-box box-shadow-custom bg-secondary-custom "><h5>{queries[counter].question}</h5></div>
                <br />
                <h6>Please choose one of the following options</h6>
                <hr />
                <InputComponent name="inputcomponent1" id="id1" optionval={queries[counter].allOptions[0]} isChecked={queries[counter].allOptions[0] === activeRadioVal} onChange={this.handleToggle} />
                <InputComponent name="inputcomponent2" id="id2" optionval={queries[counter].allOptions[1]} isChecked={queries[counter].allOptions[1] === activeRadioVal} onChange={this.handleToggle} />
                <InputComponent name="inputcomponent3" id="id3" optionval={queries[counter].allOptions[2]} isChecked={queries[counter].allOptions[2] === activeRadioVal} onChange={this.handleToggle} />
                <InputComponent name="inputcomponent4" id="id4" optionval={queries[counter].allOptions[3]} isChecked={queries[counter].allOptions[3] === activeRadioVal} onChange={this.handleToggle} />
                <hr />
                <div className="d-flex justify-content-end">
                    <button class="btn btn-primary submit-btn flex-end" type="submit" onClick={this.handleSubmit} disabled={activeRadioVal == null || this.state.gameOver}>Submit</button>
                </div>
                {this.state.showModal && <MyReactModal showModal={this.state.showModal} score={this.state.score} handleModalClose={this.handleModalClose} />}
            </div>

        );
    }
}

export default Quiz;
