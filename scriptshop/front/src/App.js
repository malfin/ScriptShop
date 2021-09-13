import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/Product";

const productMock = [
    {'name': "Товар #1", 'created': "2021-09-02", 'sum': '120'},
    {'name': "Товар #2", 'created': "2021-09-07", 'sum': '60'},
    {'name': "Товар #3", 'created': "2021-09-28", 'sum': '90'},
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({
                products: productMock,
            }
        )
    }

    render() {
        console.log('state', this.state);
        return (
            <div className='container'>
                <Header/>
                <ProductList products={this.state.products}/>
                <Footer/>
            </div>

        )
    }
}

export default App;
