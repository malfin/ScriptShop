// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.setState({
            'name': [],
            'category': [],
            'sum': [],
        });
    }
    render() {
        console.log('state', this.state);
        return(
            <div>ScriptShop</div>
        )
    }
}


// function App() {
//     return (
//         <div className="container">
//             <Header/>
//             <h3 className="mt-5">Все Товары</h3>
//             <div className="App m-5">
//                 <div className="d-flex justify-content-between flex-wrap">
//                     <div className="card">
//                         <div className="card-header">
//                             <h5>Товар #1</h5>
//                         </div>
//                         <div className="card-body">
//                             <p>
//                                 Описание
//                             </p>
//                         </div>
//                     </div>
//                     <div className="card">
//                         <div className="card-header">
//                             <h5>Товар #2</h5>
//                         </div>
//                         <div className="card-body">
//                             <p>
//                                 Описание
//                             </p>
//                         </div>
//                     </div>
//                     <div className="card">
//                         <div className="card-header">
//                             <h5>Товар #3</h5>
//                         </div>
//                         <div className="card-body">
//                             <p>
//                                 Описание
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     );
// }

export default App;
