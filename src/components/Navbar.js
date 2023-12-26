import "../styles/navbar.css";
import mdnLogo from "../images/mdnLogo.png";
import vinnyLogo from "../images/vinnyLogo.png";
import githubLogo from "../images/githubLogo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="__self"
                >
                    <li>
                        <img src={mdnLogo} alt="MDN" className="mdn"></img>
                    </li>
                </a>
                <h1>Important HTML Tags</h1>
                <a href="https://vineethchivukula.github.io/portfolio/" target="__self">
                    <li>
                        <img
                            src={vinnyLogo}
                            alt="vinny"
                            className="vinny"
                        ></img>
                    </li>
                </a>
                <li>
                    <img src={githubLogo} alt="github" className="github"></img>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
