import React, { useState, useEffect } from 'react';
import '../styling/navbar.css'; // Import the Home CSS file
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Footer = () => {



    return (

        <div className='navbar-footer-container'>
            <div className='navbar-footer'>

                <div>
                    <a href="https://www.linkedin.com/in/ethan-sroka-8402631a2/">Linkedin</a>
                </div>
                <div>
                    <a href="https://github.com/ethancs13">Github</a>
                </div>
                <div>
                    <a href="https://twitter.com/ethancsroka">X</a>
                </div>
                <div>
                    <a href="https://stackoverflow.com/users/23232813/ethan-sroka">Stackoverflow</a>
                </div>

            </div>
        </div>

    );
};

export default Footer;