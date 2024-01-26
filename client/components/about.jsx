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
                    <p style={{lineHeight: "30px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus. Placerat in egestas erat imperdiet sed euismod nisi.
                    <br />Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Netus et malesuada fames ac turpis egestas maecenas pharetra. Egestas quis ipsum suspendisse ultrices gravida dictum. Ornare arcu odio ut sem. Nibh tortor id aliquet lectus. Fames ac turpis egestas integer. Eget nullam non nisi est. Eget sit amet tellus cras adipiscing enim eu.
                    <br />Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Rhoncus est pellentesque elit ullamcorper dignissim cras. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Vel fringilla est ullamcorper eget nulla facilisi etiam. Arcu risus quis varius quam quisque.
                    <br />Vitae turpis massa sed elementum tempus. Auctor neque vitae tempus quam pellentesque nec nam.
                    </p>
                </div>
            </div>
        </>

    );
};

export default aboutMe;