import ReactModal from "react-modal";
import React from "react";

ReactModal.setAppElement("#root");

export default class MyReactModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '50%',
            height: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    componentDidMount() {
        console.log("Modal mounted");
    }

    // Also check componentWillMount()
    /*  ComponentWillMount is called just before render method , therefore setState in this method will not trigger a re-render 
    */

    handleClose = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        let score = this.props.score;
        return (
            <ReactModal
                isOpen={this.props.showModal}
                style={this.customStyles}
                ContentLabel={"Final Score"}>
                <h2 className="text-center">Your Final score is {score}</h2>
                <button onClick={this.props.handleModalClose}
                    className="btn btn-danger d-block"
                    style={{ position: 'absolute', bottom: '10%', right: '5%' }}>
                    Close
                </button>
            </ReactModal>
        )
    }
}