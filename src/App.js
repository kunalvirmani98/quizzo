import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Quiz from './quiz';
import About from './about';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'home'
    };
    this.changeActivePage = this.changeActivePage.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(this.state.activePage);
  }

  changeActivePage(_page) {
    this.setState(function (prevState, props) {
      return { activePage: _page }
    });
  }

  render() {
    return (
      <div className="m-2">
        <h1 className="display-1 text-center bg-dark py-4 text-white">quizzo</h1>
        <Router><ul class="nav nav-tabs">
          <li className="nav-item">
            <Link className={`nav-link ${this.state.activePage === "home" ? " active" : ""}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${this.state.activePage === "quiz" ? " active" : ""}`} to="/quiz">Quiz</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${this.state.activePage === "about" ? " active" : ""}`} to="/about">About</Link>
          </li>
        </ul>
          <Switch>
            <Route exact path="/">
              <Home changeActivePage={this.changeActivePage} />
            </Route>
            <Route path="/quiz">
              <Quiz changeActivePage={this.changeActivePage} />
            </Route>
            <Route path="/about">
              <About changeActivePage={this.changeActivePage} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
