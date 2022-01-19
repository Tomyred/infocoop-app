import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./main/dashboard";
import store from "./store/index";
import theme from "./theme/theme";

const myStore = store();
function App() {
    return (
        <div className="App">
            <Provider store={myStore}>
                <Router>
                    <ThemeProvider theme={theme}>
                        <Dashboard />
                    </ThemeProvider>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
