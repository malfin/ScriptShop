import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/Product";
import UserList from "./components/User";
import CategoryList from "./components/Category";
import CategoryDetail from "./components/CategoryDetail";
import UserDetail from "./components/UserDetail";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import user from "./components/User";
import RegisterForm from "./components/RegisterForm";

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/v1/${suffix}/`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            users: [],
            accessToken: this.getAccessToken(),
            loading: false,
        };
    }

    componentDidMount() {
        this.loadState();
        // console.log('headers', headers)
    }

    loadState() {
        let headers = this.getHeaders();

        // call API
        axios
            .get(getResourceURL('users'), {headers: headers})
            .then((result) => {
                this.setState({
                    users: result.data,
                    loading: true,
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL('products'), {headers: headers})
            .then((result) => {
                this.setState({
                    products: result.data,
                    loading: true,
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL('category'), {headers: headers})
            .then((result) => {
                this.setState({
                    categories: result.data,
                    loading: true,
                })
            })
            .catch((error) => console.log(error));
    }

    login(username, password) {
        // console.log('state', username, password);
        axios
            .post(getResourceURL('token'),
                {"username": username, "password": password})
            .then((result) => {
                let refreshToken = result.data.refresh;
                let accessToken = result.data.access;

                this.saveTokens(refreshToken, accessToken, user)
                this.setState({
                    accessToken: accessToken
                }, this.loadState)
                window.location = '/';
            })
            .catch((error) => console.log(error));
    }

    logout() {
        localStorage.setItem('refreshToken', null);
        localStorage.setItem('accessToken', null);
        this.clearState();
    }

    clearState() {
        this.setState({
            accessToken: null,
            users: [],
            projects: [],
            tasks: [],
            loading: false,
        })
    }

    saveTokens(refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
    }

    getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    isAuthenticated() {
        return this.state.accessToken !== 'null' && this.state.accessToken !== null;
    }


    getHeaders() {
        let headers = {
            'Content-Type': "application/json"
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${this.state.accessToken}`
        }

        return headers;
    }

    render() {
        return (
            <div className='container'>
                <Router>
                    <Header isAuthenticated={this.isAuthenticated()} logout={() => this.logout()}/>
                    <Route exact path={'/'}>
                        <Main/>
                    </Route>
                    <Route exact path={'/category'}>
                        <CategoryList categories={this.state.categories} loading={this.state.loading}/>
                    </Route>
                    <Route exact path={'/category/detail/:id'}>
                        <CategoryDetail categories={this.state.categories}/>
                    </Route>
                    <Route exact path={'/users'}>
                        <UserList users={this.state.users} isAuthenticated={this.isAuthenticated()}
                                  loading={this.state.loading}/>
                    </Route>
                    <Route exact path="/users/detail/:id">
                        <UserDetail users={this.state.users}/>
                    </Route>
                    <Route exact path="/products/">
                        <ProductList products={this.state.products} loading={this.state.loading}/>
                    </Route>
                    <Route exact path="/login">
                        <LoginForm
                            login={(username, password) => this.login(username, password)}/>
                    </Route>
                    <Route exact path="/register">
                        <RegisterForm
                            login={(username, password) => this.register(username, password)}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;
