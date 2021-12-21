import React from "react";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange(event) {
        console.log('change:', event.target.name, event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit:', event.target);
    }

    render() {
        return (
            <div className="login-form">
                <form method="post" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="username"
                               id="exampleInputUserName"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="password"
                               id="exampleInputPassword"
                               onChange={this.handleChange}/>
                    </div>
                    <input type="submit"
                           value="login" className="btn btn-success"/>
                </form>
            </div>
        )
    }

}

export default LoginForm