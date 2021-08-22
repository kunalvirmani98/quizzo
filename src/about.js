import React from 'react';

class About extends React.Component {


    componentDidMount() {
        this.props.changeActivePage('about');
    }

    render() {
        return (<h1>About</h1>)
    }
}

export default About;