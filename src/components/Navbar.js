import "../styles/navbar.css";
import { Typography, Button } from "@mui/joy";

import mdnLogo from "../images/mdnLogo.png";
import vinnyLogo from "../images/vinnyLogo.png";
import githubLogo from "../images/githubLogo.png";

import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                <li>
                    <Sidebar />
                </li>
                <li>
                    <Button
                        variant="contained"
                        size="large"
                        className="mdn"
                        onClick={() => {
                            window.open(
                                "https://developer.mozilla.org/en-US/docs/Web/HTML"
                            );
                        }}
                    >
                        <img src={mdnLogo} alt="MDN" draggable="false" />
                    </Button>
                </li>
                <Typography level="h1">Important HTML Tags</Typography>
                <li>
                    <Button
                        variant="contained"
                        size="large"
                        className="vinny"
                        onClick={() => {
                            window.open(
                                "https://vineethchivukula.github.io/portfolio/"
                            );
                        }}
                    >
                        <img
                            src={vinnyLogo}
                            alt="vinny"
                            draggable="false"
                        ></img>
                    </Button>
                </li>
                <li>
                    <Button
                        variant="contained"
                        size="large"
                        className="github"
                        onClick={() => {
                            window.open(
                                "https://github.com/VineethChivukula/htmlsnips"
                            );
                        }}
                    >
                        <img
                            src={githubLogo}
                            alt="github"
                            draggable="false"
                        ></img>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
