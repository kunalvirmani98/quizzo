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
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="m-2">
        <h1 className="display-1 text-center bg-dark py-4 text-white">quizzo</h1>
        <Router><ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active"><Link to="/">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/quiz">Quiz</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/about">About</Link></a>
          </li>
        </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
