import React from "react";


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password2: '',
            username: '',
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        return (
            <div className="login-form">
                <form method="post" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Логин</label>
                        <input type="text" className="form-control"
                               name="login" placeholder="Логин"
                               id="exampleInputUserName"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Имя</label>
                        <input type="text" className="form-control"
                               name="first_name" placeholder="Имя"
                               id="exampleInputUserName"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Фамилия</label>
                        <input type="text" className="form-control"
                               name="last_name" placeholder="Фамилия"
                               id="exampleInputUserName"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Почта</label>
                        <input type="text" className="form-control"
                               name="mail" placeholder="Почта"
                               id="exampleInputUserName"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Пароль</label>
                        <input type="password" className="form-control"
                               name="password" placeholder="password"
                               id="exampleInputPassword"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Повторите пароль</label>
                        <input type="password" className="form-control"
                               name="password" placeholder="password"
                               id="exampleInputPassword"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>

                    <input type="submit"
                           value="Регистрация" className="btn btn-success"/>
                </form>
            </div>
        )
    }

}

export default RegisterForm