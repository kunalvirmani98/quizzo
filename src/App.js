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
      activePage: 'home',
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
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <Link to="/" className="navbar-brand">Quizzo</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className={`nav-link ${this.state.activePage === "home" ? " active" : ""}`}>Home</Link>
                <Link to="/quiz" className={`nav-link ${this.state.activePage === "quiz" ? " active" : ""}`}>Quiz</Link>
                <Link to="/about" className={`nav-link ${this.state.activePage === "about" ? " active" : ""}`}>About</Link>
              </div>
            </div>
          </nav>
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
