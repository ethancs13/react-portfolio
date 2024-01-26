import React, { useState } from "react";
import axios from "axios";
import "../styling/contact.css";

const Contact = () => {
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create form data using FormData object
            const formData = new FormData();
            formData.append("firstname", fn);
            formData.append("lastname", ln);
            formData.append("email", email);
            formData.append("subject", subject);

            // Make Axios POST request
            const response = await axios.post("http://localhost:3001/contact", formData);

            // Handle success (e.g., show success message)
            console.log("Form submitted successfully", response.data);

            if (response.data.status === "success") {
                setMessage('Submitted. Thank you!')
                document.querySelector('.container').classList.add('hidden')
            } else {
                setMessage('an unexpected error has occurred')
            }

            // Optionally, reset form fields after successful submission
            setFn("");
            setLn("");
            setEmail("");
            setSubject("");
        } catch (error) {
            // Handle error (e.g., show error message)
            console.error("Error submitting form", error);
        }
    };

    return (
        <>
            <h2 className="contact-title">Contact</h2>
            {message && <div className="message">{message}</div>}

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." value={fn} onChange={(e) => setFn(e.target.value)} required />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={ln} onChange={(e) => setLn(e.target.value)} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something..." style={{ height: "200px" }} value={subject} onChange={(e) => setSubject(e.target.value)} required ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default Contact;
