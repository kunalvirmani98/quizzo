import React from 'react';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            id: this.props.id,
        };
    }

    componentDidMount() {
        console.log("ComponentDidMount called");
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate callled");
    }

    render() {
        return (
            <div className="form-check">
                <input className="form-check-input"
                    type="radio"
                    value={this.props.optionval}
                    onChange={this.props.onChange}
                    name={this.state.name}
                    id={this.state.id}
                    checked={this.props.isChecked} />

                <label className="form-check-label" htmlFor="{this.state.name}">
                    {this.props.optionval}
                </label>
            </div>
        )
    }
}
