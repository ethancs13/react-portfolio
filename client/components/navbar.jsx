import '../styling/navbar.css'; // Import the navbar CSS file
import svg from "../src/assets/SVG_gram.svg"
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


const Navbar = () => {

    return (

        <div className='navbar-header-container'>
            <header className='navbar-header'>

                <div className="nav-items">
                    <NavLink to="/" style={({ isActive }) => ({
                        textDecoration: isActive
                            ? "underline"
                            : "none",
                    })}>
                        <h2>Ethan Sroka</h2>
                    </NavLink>

                    <NavLink className={"nav-link"} to="/about" style={({ isActive }) => ({
                        borderBottom: isActive
                            ? "solid black 1px"
                            : "none",
                    })}>
                        About
                    </NavLink>
                    <NavLink className={"nav-link"} to="/contact" style={({ isActive }) => ({
                        borderBottom: isActive
                            ? "solid black 1px"
                            : "none",
                    })}>
                        Contact
                    </NavLink>
                    <NavLink className={"nav-link"} to="/resume" style={({ isActive }) => ({
                        borderBottom: isActive
                            ? "solid black 1px"
                            : "none",
                    })}>
                        Resume
                    </NavLink>
                    <NavLink className={"nav-link"} to="/portfolio" style={({ isActive }) => ({
                        borderBottom: isActive
                            ? "solid black 1px"
                            : "none",
                    })}>
                        Portfolio
                    </NavLink>
                </div>
                <div className="nav-socials">
                    <a href="https://www.instagram.com/ethansroka/">
                        <img src={svg} alt="instagram-icon" />
                    </a>
                </div>

            </header>
        </div>

    );
};

export default Navbar;