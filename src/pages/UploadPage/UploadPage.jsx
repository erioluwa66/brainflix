import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import './UploadPage.scss';

// Functional component UploadPage
function UploadPage(props) {
    // Using useState hook to manage state
    const [submit, setSubmit] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Set submit state to true
        setSubmit(true);
        // Set timeout to simulate upload process
        setTimeout(() => {
            alert("Uploaded!"); // Alert uploaded message
            // Redirect to home page using history object from props
            props.history.push('/');
        }, 3000);
    };

    return (
        <section className={"upload " + (submit ? "loading" : "")}>
            <h1 className="upload__title">Upload Video</h1>
            {/* Form element with onSubmit event handler */}
            <form className="upload__form" onSubmit={handleSubmit}>
                <div className="upload__form-left">
                    <p className="upload__label">VIDEO THUMBNAIL</p>
                    {/* Image element for thumbnail */}
                    <img className="upload__thumbnail" src={thumbnail} alt="Thumbnail" />
                </div>
                <div className="upload__form-right">
                    {/* Label and input field for video title */}
                    <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                    <input className="upload__input" name="title" placeholder="Add a title to your video" required />
                    {/* Label and textarea for video description */}
                    <label className="upload__label" htmlFor="text">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload__textarea" name="text" placeholder="Add a description to your video" required />
                </div>
                <div className="upload__action">
                    {/* Button to submit form */}
                    <button className="upload__submit">PUBLISH</button>
                    {/* Link to cancel upload and go back to home page */}
                    <Link className="upload__link" to="/">CANCEL</Link>
                </div>
            </form>
        </section>
    );
}

export default UploadPage;
