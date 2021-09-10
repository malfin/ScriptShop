import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="container">
            <Header/>
            <h3 className="mt-5">Все Товары</h3>
            <div className="App m-5">
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="card">
                        <div className="card-header">
                            <h5>Товар #1</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                Описание
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5>Товар #1</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                Описание
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5>Товар #1</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                Описание
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
