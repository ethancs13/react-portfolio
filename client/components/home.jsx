import '../styling/home.css'; // Import the Home CSS file


const Home = () => {


    return (

        <div className='home-box'>
            <div id="borderLeft"></div>
            <div id="borderRight"></div>


            <div className="home-container">

                <div className="home-innerContainer">

                    <div className="left">
                        <div className="home-welcome">
                            <h1>Welcome.</h1>
                            <p>
                                My name is Ethan Sroka, I'm a full-stack developer based in Denver, Colorado, United States.
                                I have developed many types of full-stack applications from scheduling apps to database storage management.
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="home-projects">
                            <label htmlFor="list">
                                <h4 className='home-projects-title'>Projects</h4>
                            </label>
                            <ul name="list" id="list" className='list'>
                                <li><a href="https://github.com/ethancs13/react">Expense Data Form</a></li>
                                <li><a href="https://github.com/ethancs13/react-portfolio">React Portfolio</a></li>
                                <li><a href="https://github.com/ethancs13/social-network-API">Social Network API</a></li>
                                <li><a href="https://github.com/ethancs13/Work-Day-Scheduler-C5">Workday Scheduler</a></li>
                                <li><a href="https://github.com/ethancs13/NoteTaker">Simple Note Taker</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="home-bottom">

                </div>
            </div>


            <div id="borderTop"></div>
            <div id="borderBottom"></div>
        </div>

    );
};

export default Home;