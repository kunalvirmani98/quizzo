import React from 'react';

class Home extends React.Component {

    componentDidMount() {
        this.props.changeActivePage('home');
    }

    render() {
        return (<h1>Home</h1>)
    }
}

export default Home;