import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3 mt-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/#" className="nav-link active"
                                                aria-current="page">Главная</a></li>
                    <li className="nav-item"><a href="/#" className="nav-link">Поддержка</a></li>
                </ul>
            </header>
            <h3 className="mt-5">Все киты</h3>
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

        </div>
    );
}

export default App;
