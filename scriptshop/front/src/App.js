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

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/v1/${suffix}/`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            users: [],
        };
    }

    componentDidMount() {
        axios
            .get(getResourceURL('users'))
            .then((result) => {
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL('products'))
            .then((result) => {
                this.setState({
                    products: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL('category'))
            .then((result) => {
                this.setState({
                    categories: result.data
                })
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className='container'>
                <Router>
                    <Header/>
                    <Route exact path={'/'}>
                        <Main/>
                    </Route>
                    <Route exact path={'/category'}>
                        <CategoryList categories={this.state.categories}/>
                    </Route>
                    <Route exact path={'/category/detail/:id'}>
                        <CategoryDetail categories={this.state.categories}/>
                    </Route>
                    <Route exact path={'/users'}>
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/users/detail/:id">
                        <UserDetail users={this.state.users}/>
                    </Route>
                    <Route exact path="/products/">
                        <ProductList products={this.state.products}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;
