import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Divider } from "@mui/joy";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Basics from "./components/Basics";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Divider />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/Home" />} />
                    {/* other routes */}
                    <Route path="/Basics" element={<Basics />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
