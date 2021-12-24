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
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        // login = getToken
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        document.title = 'Авторизация'
        return (
            <div className="login-form">
                <form method="post" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Имя пользователя</label>
                        <input type="text" className="form-control"
                               name="username" placeholder="Имя пользователя"
                               id="exampleInputUserName"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Пароль</label>
                        <input type="password" className="form-control"
                               name="password" placeholder="Пароль"
                               id="exampleInputPassword"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <input type="submit"
                           value="Войти" className="btn btn-success"/>
                </form>
            </div>
        )
    }

}

export default LoginForm