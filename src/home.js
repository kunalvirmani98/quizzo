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
                    <img src={logo} style={{ width: "450px", height: "450px", marginTop: "5rem", borderRadius: "50%" }} alt="logo" />
                    <div className="m-5">
                        <h1 className="display-3 text-primary-custom"><strong>Where quiz meets entertainment!</strong></h1>
                        <h4>Unlocking knowledge at the speed of thought.</h4>
                        <br />
                        <h5>Quizzo is a refreshing quiz game that makes learning easy ,motivates you to learn more and serves the purpose of
                            testing your learning
                        </h5>
                        <button className="btn btn-primary-custom">Learn more</button>
                        <br />
                        <br />
                        <h5>Feeling bored? Why not take a quiz</h5>
                        <button className="btn btn-primary-custom submit-btn flex-end" type="submit">Start quiz</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;