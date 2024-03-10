import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api_url } from "../../Utils/Utils"; // Assuming you have a variable `api_url` that holds your API base URL
import publishIcon from '../../assets/icons/publish.svg';
import './UploadPage.scss';

// Functional component UploadPage
function UploadPage(data) {
    // Using useState hook to manage state
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newVideo = {
            title: formData.get('title'),
            description: formData.get('description'),
        };

        try {
            setSubmit(true);
            await axios.post(`${api_url}/videos`, newVideo);
            setTimeout(() => {
                alert('Video uploaded successfully!');
                navigate('/');
            }, 1000); // Set delay for 1 second
        } catch (error) {
            console.error('Error uploading video:', error);
            alert('Failed to upload video. Please try again later.');
        }
    };

    // Construct image path on the client-side
    const imagePath = `${api_url}/images/default.jpg`; //http://localhost:8080/images/default.jpg

    return (
        <section className={"upload " + (submit ? "updating" : "")}>
            <h1 className="upload__header">Upload Video</h1>
            {/* Form element with onSubmit event handler */}
            <form className="upload__form" onSubmit={handleSubmit}>
                <div className="upload__form-left">
                    <p className="upload__label">VIDEO THUMBNAIL</p>
                    {/* Image element for thumbnail */}
                    <img className="upload__thumbnail" src={imagePath} alt="Thumbnail" />
                </div>
                <div className="upload__form-right">
                    {/* Label and input field for video title */}
                    <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                    <input className="upload__input" name="title" id='title' placeholder="Add a title to your video" required />
                    {/* Label and textarea for video description */}
                    <label className="upload__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload__textarea" name="description" id="description" placeholder="Add a description to your video" required />
                </div>
                <div className="upload__action">
                    {/* Button to submit form */}
                    <button className="upload__publish">
                        <img className="upload__publish-icon" src={publishIcon} alt="publish icon" /> 
                        PUBLISH  
                    </button>
                    {/* Link to cancel upload and go back to home page */}
                    <Link className="upload__cancel" to="/">CANCEL</Link>
                </div>
            </form>
        </section>
    );
}

export default UploadPage;
