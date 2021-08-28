import React from 'react';
import devLogo from './cartoon-dev.jpg';

class About extends React.Component {

    componentDidMount() {
        this.props.changeActivePage('about');
    }

    render() {
        return (
            <div className="body-container">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center m-5">
                        <h1 className="display-1"><strong>Hi, I'm _____</strong></h1>
                        <h5 className="text-secondary">A passionate Software Developer having an experience of building web applications
                            using React / JavaScript / Nodejs and some other cool libraries and frameworks. I am currenly working in ______ as a
                            Software Developer and open to new opportunities
                        </h5>
                    </div>
                    <img src={devLogo} className="box-shadow-custom" style={{ width: "550px", height: "550px", borderRadius: "50%" }} alt="logo" />
                </div>
            </div>
        )
    }
}

export default About;