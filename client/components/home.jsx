import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/home.css'; // Import the Home CSS file


const Home = () => {



    return (

        <div className='home-container'>
            <header className='home-header'>

                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Resume
                </div>
                <div>
                    Portfolio
                </div>

            </header>

            <main className='home-content'>

            </main>

            <footer className='home-footer'>
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Resume
                </div>
                <div>
                    Portfolio
                </div>
            </footer>
        </div>

    );
};

export default Home;