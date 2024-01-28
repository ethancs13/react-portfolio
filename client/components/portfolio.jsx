import React from "react";
import "../styling/portfolio.css"
import svg from "../src/assets/placeholder.svg";

const Portfolio = () => {

    return (
        <>
            <h2 className="portfolio-title">Portfolio</h2>

            <div className="items-container">
                <div className="item">

                    <a className="portfolio-item" href="">
                        <div className="image-container"><img src="./workDayScheduler.png" alt="workdayApp-image" /></div>

                    </a>
                </div>
                <div className="item">

                    <a className="portfolio-item" href="">
                        <div className="image-container"><img src="./expenseForm.PNG" alt="expenseForm-preview" /></div>

                    </a>
                </div>
                <div className="item">

                    <a className="portfolio-item" href="">
                        <div className="image-container"><img src="./SocialNetworkAPI.PNG" alt="api-preview" /></div>

                    </a>
                </div>
                <div className="item">

                    <a className="portfolio-item" href="">
                        <div className="image-container"><video autoPlay="true" src="../src/assets/noteTaker.mp4" alt="video of notetaker" /></div>

                    </a>
                </div>
                <div className="item">

                    <a className="portfolio-item" href="">
                        <div className="image-container"><img src="./weatherapp.PNG" alt="weatherApp-preview" /></div>

                    </a>
                </div>
                <div className="item">

                    <a className="portfolio-item" href="">
                        <div className="image-container"><img src="./tech-blog.PNG" alt="techBlog-preview" /></div>

                    </a>
                </div>
            </div>

        </>
    );
}
export default Portfolio;
