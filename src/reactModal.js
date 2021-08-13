import ReactModal from "react-modal";
import React from "react";

export default class MyReactModal extends React.Component {
    state = {
        isOpen: this.props.showModal,
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

    handleClose = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <ReactModal
                isOpen={this.state.isOpen}
                style={this.customStyles}
                ContentLabel={"Alert Message"}>
                <button onClick={this.handleClose}>Close Modal</button>
            </ReactModal>
        )
    }
}