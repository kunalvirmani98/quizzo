import React from 'react';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            id: this.props.id,
            isChecked: this.props.isChecked,
            optionVal: this.props.optionVal
        };
    }
    render() {
        const isChecked = this.props.isChecked === "false" ? false : true;
        return (
            <div class="form-check">
                {isChecked ?
                    <input class="form-check-input" type="radio" name={this.state.name} id={this.state.id} value={this.props.isChecked} checked /> :
                    <input class="form-check-input" type="radio" name={this.state.name} id={this.state.id} value={this.props.isChecked} />}
                <label class="form-check-label" for="{this.state.name}">
                    {this.props.optionVal}
                </label>
            </div>
        )
    }
}
