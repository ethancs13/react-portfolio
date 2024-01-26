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

                    <NavLink to="/about" style={({ isActive }) => ({
                        textDecoration: isActive
                            ? "underline"
                            : "none",
                    })}>
                        About
                    </NavLink>
                    <NavLink to="/contact" style={({ isActive }) => ({
                        textDecoration: isActive
                            ? "underline"
                            : "none",
                    })}>
                        Contact
                    </NavLink>
                    <NavLink to="/resume" style={({ isActive }) => ({
                        textDecoration: isActive
                            ? "underline"
                            : "none",
                    })}>
                        Resume
                    </NavLink>
                    <NavLink to="/portfolio" style={({ isActive }) => ({
                        textDecoration: isActive
                            ? "underline"
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