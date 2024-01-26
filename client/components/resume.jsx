import React from "react";
import pdf from "../src/assets/Resume.pdf"
import svg from "../src/assets/PDF_file_icon.svg"
import "../styling/resume.css"

const Resume = () => {

    return (
        <>
        <h2 className="resume-title">Resume</h2>
        <div className="resume-container">


            <div className="resume-left-aside">
                <h1>Skills</h1>

                <ul className="skill-list">
                    <li>SQL</li>
                    <li>Databases</li>
                    <li>WebSocket</li>
                    <li>Git / Github</li>
                    <li>Object-Relational Mapping (ORM)</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Express.js</li>
                    <li>JavaScript</li>
                    <li>JSON</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Bootstrap (Framework)</li>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>HTML / HTML5</li>
                    <li>RESTful WebServices</li>
                    <li>REST APIs</li>
                    <li>AJAX</li>
                    <li>Full-Stack Development</li>
                    <li>Wordpress</li>
                    <li>Amazon Web Services (AWS)</li>
                    <li>Axios</li>
                    <li>Functional Programming</li>
                    <li>JSON Web Token (JWT)</li>
                    <li>Testing / Debugging</li>

                </ul>
            </div>

            <div className="resume-right-aside">
                <label className="resume-label" htmlFor="resume-image-container">Resume
                    <a href={pdf} className="resume-image-container" name="image-container">
                        <img src={svg} alt="pdf-icon" />
                    </a>
                </label>
            </div>
        </div>
    </>
    );
}
export default Resume;
