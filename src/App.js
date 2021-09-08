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
import Login from './login';
import userLogo from './cartoon-dev.jpg';

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
          <nav className="navbar navbar-dark navbar-expand-lg px-5">
            <Link to="/" className="navbar-brand text-primary-custom">Quizzo</Link>
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
            <Link class="navbar-brand" to="/login">
              <img src={userLogo} style={{ width: "30px", height: "30px", borderRadius: "50%" }} className="d-inline-block align-top mx-2" alt="" />
              User1
            </Link>
          </nav>
          <section>
            {/*<div class="wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>*/}
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
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </section>
          <div className="spacer layer1"></div>
        </Router>
      </div>
    );
  }
}

export default App;
