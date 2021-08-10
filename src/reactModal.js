import ReactModal from "react-modal";
import React from "react";

export default class MyReactModal extends React.Component {
    state = {
        isOpen: false,
    }

    handleClose = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <ReactModal
                isOpen={this.state.isOpen}
                ContentLabel={"Alert Message"}>
                <button onClick={this.handleClose}>Close Modal</button>
            </ReactModal>
        )
    }
}