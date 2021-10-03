import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/Product";
import UserList from "./components/User";
import CategoryList from "./components/Category";

const userMock = [
    {
        "id": 11,
        "first_name": "",
        "last_name": "",
        "username": "admin",
        "balance": "9999.00",
        "phone_number": ""
    },
    {
        "id": 82,
        "first_name": "Gabriel",
        "last_name": "Hensley",
        "username": "ricky50",
        "balance": "735.00",
        "phone_number": "KdNeSKJXTcbPnVKUX"
    },
    {
        "id": 83,
        "first_name": "Chelsey",
        "last_name": "Choi",
        "username": "johnabbott",
        "balance": "828.00",
        "phone_number": "dvdlBEXrxzJfTxEAj"
    },
    {
        "id": 84,
        "first_name": "Summer",
        "last_name": "Scott",
        "username": "gordon88",
        "balance": "56.00",
        "phone_number": "BqMNPQmFQxJIOIUmU"
    },
    {
        "id": 85,
        "first_name": "Eileen",
        "last_name": "Nguyen",
        "username": "max68",
        "balance": "973.00",
        "phone_number": "UemSUFAygQeMpbCbU"
    },
    {
        "id": 86,
        "first_name": "Jake",
        "last_name": "George",
        "username": "evansmia",
        "balance": "749.00",
        "phone_number": "InKjTVYrzZuVGsyIZ"
    },
    {
        "id": 87,
        "first_name": "Max",
        "last_name": "Lowery",
        "username": "gregg70",
        "balance": "670.00",
        "phone_number": "YFSlEFIwjUhekDHuI"
    },
    {
        "id": 88,
        "first_name": "Joe",
        "last_name": "Roy",
        "username": "michaelaandrade",
        "balance": "480.00",
        "phone_number": "xIwgBnNlHhDeiMcBf"
    },
    {
        "id": 89,
        "first_name": "Debra",
        "last_name": "Ritter",
        "username": "alvarezbeverly",
        "balance": "157.00",
        "phone_number": "vzBPuItRKUqAsIkCt"
    },
    {
        "id": 90,
        "first_name": "Charlene",
        "last_name": "Johns",
        "username": "clarkenoah",
        "balance": "959.00",
        "phone_number": "hIscZDXsSYnWvDNps"
    },
    {
        "id": 91,
        "first_name": "Donna",
        "last_name": "Montgomery",
        "username": "brandy53",
        "balance": "243.00",
        "phone_number": "mxjVmjIZKItuPbmTT"
    }
];

const productMock = [
    {
        "id": 1,
        "name": "Товар #1",
        "desc": "Описание товара, товар #1",
        "sum": "58.00",
        "img": null,
        "created": "2021-09-04T19:16:31.611064+05:00",
        "updated": "2021-09-04T19:16:31.611064+05:00",
        "category": 1
    },
    {
        "id": 2,
        "name": "Товар #2",
        "desc": "Описание товара, товар #2",
        "sum": "49.00",
        "img": null,
        "created": "2021-09-04T19:16:31.627060+05:00",
        "updated": "2021-09-04T19:16:31.627060+05:00",
        "category": 2
    },
    {
        "id": 3,
        "name": "Товар #3",
        "desc": "Описание товара, товар #3",
        "sum": "4.00",
        "img": null,
        "created": "2021-09-04T19:16:31.641072+05:00",
        "updated": "2021-09-04T19:16:31.642071+05:00",
        "category": 3
    },
    {
        "id": 4,
        "name": "Товар #4",
        "desc": "Описание товара, товар #4",
        "sum": "56.00",
        "img": null,
        "created": "2021-09-04T19:16:31.657046+05:00",
        "updated": "2021-09-04T19:16:31.657046+05:00",
        "category": 4
    },
    {
        "id": 5,
        "name": "Товар #5",
        "desc": "Описание товара, товар #5",
        "sum": "36.00",
        "img": null,
        "created": "2021-09-04T19:16:31.672047+05:00",
        "updated": "2021-09-04T19:16:31.672047+05:00",
        "category": 5
    }
];

const categoryMock = [
    {
        "id": 1,
        "name": "Категория #1",
        "created": "2021-09-04T19:12:39.328876+05:00",
        "updated": "2021-09-04T19:12:39.328876+05:00"
    },
    {
        "id": 2,
        "name": "Категория #2",
        "created": "2021-09-04T19:12:39.343870+05:00",
        "updated": "2021-09-04T19:12:39.343870+05:00"
    },
    {
        "id": 3,
        "name": "Категория #3",
        "created": "2021-09-04T19:12:39.355867+05:00",
        "updated": "2021-09-04T19:12:39.355867+05:00"
    },
    {
        "id": 4,
        "name": "Категория #4",
        "created": "2021-09-04T19:12:39.368860+05:00",
        "updated": "2021-09-04T19:12:39.368860+05:00"
    },
    {
        "id": 5,
        "name": "Категория #5",
        "created": "2021-09-04T19:12:39.380859+05:00",
        "updated": "2021-09-04T19:12:39.380859+05:00"
    }
];

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

        this.setState({
                products: productMock,
                categories: categoryMock,
                users: userMock,
            }
        )
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
                    <Route exact path={'/users'}>
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path={'/products'}>
                        <ProductList products={this.state.products}/>
                    </Route>
                </Router>
                <Footer/>
            </div>

        )
    }
}

export default App;
