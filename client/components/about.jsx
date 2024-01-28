import React from 'react';
import '../styling/about.css'; // Import the Home CSS file


const aboutMe = () => {


    return (
        <>
            <div className="about-title">
                <h2>About</h2>
            </div>
            <div className='container'>

                <div className="left-aside">
                    <div className="image-container">
                        <img src="../ethan.jpeg" alt="profile-image" />
                    </div>
                </div>
                <div className="right-aside">
                    <p style={{ lineHeight: "30px" }}>
                        Hello, I'm Ethan Sroka, a dedicated 23-year-old professional with a strong foundation in web development.
                        Currently pursuing a Full Stack Web Development certificate from Denver University,
                        I've accumulated two years of hands-on experience in the field. 
                        My journey began with a focus on Java development during college,
                        where I also delved into game development using C++, Java, and JavaScript.
                        With a background in the service industry, I've honed exceptional customer 
                        service skills that complement my technical expertise. In 2021,
                        my passion expanded into photography, leading me to establish Cloudvu, a 
                        drone real estate photography business. This venture not only sharpened
                        my time management skills but also emphasized the importance of delivering 
                        the highest quality products.
                        Presently, I am immersed in a comprehensive program covering HTML, CSS, JavaScript, 
                        Node.js, React.js, APIs, REST APIs, Angular, SQL databases, data
                        structures, ORM, WebSockets, and Express.js, among other full-stack development technologies.
                        My commitment lies in leveraging this diverse skill set to create innovative solutions and contribute
                         meaningfully to collaborative projects.
                        Let's connect and explore opportunities to collaborate in the dynamic world of web development!
                    </p>
                </div>
            </div>
        </>

    );
};

export default aboutMe;