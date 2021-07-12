import React from 'react';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            id: this.props.id,
            isChecked: false,
            optionVal: this.props.optionVal
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        if (this.state.isChecked)
            this.setState({ isChecked: false })
        else
            this.setState({ isChecked: true })
        console.log(this.state.isChecked);
    }

    render() {
        return (
            <div class="form-check">
                <input className="form-check-input" type="radio" onChange={this.handleToggle} name={this.state.name} id={this.state.id} defaultChecked={this.state.isChecked} />

                <label className="form-check-label" htmlFor="{this.state.name}">
                    {this.props.optionVal}
                </label>
            </div>
        )
    }
}
