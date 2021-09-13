import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/Project';
import ProductList from "./components/Product";

const projectMock = [
    {'name': "Project X", 'created': "2021-09-02"},
    {'name': "Project TWO", 'created': "2021-09-07"},
];

const productMock = [
    {'name': "Товар #1", 'created': "2021-09-02", 'sum': '120'},
    {'name': "Товар #2", 'created': "2021-09-07", 'sum': '60'},
    {'name': "Товар #3", 'created': "2021-09-28", 'sum': '90'},
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            projects: [],
            tasks: [],
            products: [],
        };
    }

    componentDidMount() {
        this.setState({
                projects: projectMock,
                products: productMock,
            }
        )
    }

    render() {
        console.log('state', this.state);
        return (
            <div className='container'>
                <Header/>
                <ProjectList projects={this.state.projects}/>
                <ProductList products={this.state.products}/>
                <Footer/>
            </div>

        )
    }
}

export default App;
