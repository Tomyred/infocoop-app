import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard";
import store from "./store/index";

const myStore = store();
function App() {
    return (
        <div className="App">
            <Provider store={myStore}>
                <Router>
                    <Dashboard />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
