import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/Product";
import UserList from "./components/User";
import CategoryList from "./components/Category";
import axios from "axios";
import CategoryDetail from "./components/CategoryDetail";
import UserDetail from "./components/UserDetail";

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
        // call rest API
        axios
            .get(getResourceURL('users'))
            .then((result) => {
                // console.log('users result:', result)
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL('products'))
            .then((result) => {
                // console.log('users result:', result)
                this.setState({
                    products: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL('category'))
            .then((result) => {
                // console.log('users result:', result)
                this.setState({
                    categories: result.data
                })
            })
            .catch((error) => console.log(error));
    }

    render() {
        console.log('state', this.state);
        return (
            <div className='container'>
                <Router>
                    <Header/>
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
