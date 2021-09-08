import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isComplete: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleLogin(this.state.username);
        // this.setState({ username: e.target})
    }

    handleChange(tag, e) {
        if (tag === "username") {
            if (e.target.value !== "") {
                this.setState({ "username": e.target.value, isComplete: true })
            } else {
                this.setState({ "username": e.target.value, isComplete: false })
            }
        }
        else if (tag === "password") {
            this.setState({ "password": e.target.value })
        }
    }

    render() {
        return (
            <>
                <section>
                    <div className="login-page box-shadow-custom p-3">
                        <h1 className="text-center text-primary-custom">Quizzo</h1>
                        <hr></hr>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInput1">Username</label>
                                <input type="text" className="form-control" id="exampleInput1" onChange={(e) => { this.handleChange("username", e) }} required />
                                {!this.state.isComplete && <span className="text-danger small">Please fill out this field</span>}
                            </div>
                            <br />
                            <div class="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword" onChange={(e) => { this.handleChange("password", e) }} />
                            </div>
                            <br />
                            <div className="d-flex justify-content-center"><button type="submit" className={`btn btn-dark ${this.state.isComplete ? "" : " disabled"}`} >Sign in</button></div>
                        </form>
                    </div>
                </section>
                <div className="spacer layer1"></div>
            </>
        )
    }
}

export default Login;