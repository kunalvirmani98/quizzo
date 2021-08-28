import React from 'react';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    };
    render() {
        return (
            <div className="login-page box-shadow-custom p-3">
                <h1 className="text-center">Quizzo</h1>
                <hr></hr>
                <br />
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInput1">Username</label>
                        <input type="text" className="form-control" id="exampleInput1" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;