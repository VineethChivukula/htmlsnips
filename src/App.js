import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BasicTemplate from "./components/BasicTemplate";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/Home" />} />
                    {/* other routes */}
                    <Route path="/BasicTemplate" element={<BasicTemplate />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
