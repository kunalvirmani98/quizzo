import React from 'react';
import logo from './questionnaire.jpg';

class Home extends React.Component {

    componentDidMount() {
        this.props.changeActivePage('home');
    }

    render() {
        return (
            <div className="body-container">
                <div className="d-flex justify-content-center">
                    <img src={logo} style={{ width: "450px", height: "500px" }} alt="logo" />
                    <div className="m-5">
                        <h1 className="display-3"><strong>Where quiz meets entertainment!</strong></h1>
                        <h4>Unlocking knowledge at the speed of thought.</h4>
                        <br />
                        <br />
                        <h5>Feeling bored? Why not take a quiz</h5>
                        <button class="btn btn-primary submit-btn flex-end" type="submit">Start quiz</button>
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default Home;