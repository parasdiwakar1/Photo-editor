import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-title">About Photo Editor</h1>
            <p className="about-us-description">
                Welcome to our Photo Editor! Our tool is designed to make your photo editing experience easy, fun, and creative. Whether you want to crop, rotate, flip, or enhance your photos, our platform provides all the tools you need to bring your images to life.
            </p>

            <div className="photo-editor-section">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0v5UhJ1PvoLc-M7k7glF_wZR5cEa1glzzHg&s" 
                    alt="Photo Editor" 
                    className="photo-editor-image"
                />
                <div className="photo-editor-details">
                    <h3>Features:</h3>
                    <ul>
                        <li>Crop and rotate your images for the perfect framing.</li>
                        <li>Flip images to create mirror effects.</li>
                        <li>Enhance your photos with filters and effects.</li>
                        <li>Adjust brightness, contrast, and saturation to perfect your images.</li>
                    </ul>
                    <p>
                        Our Photo Editor is built with simplicity and flexibility in mind, allowing you to make quick adjustments and detailed edits with ease. It's perfect for both beginners and professional photographers alike. Get creative with your photos and make them stand out!
                    </p>
                </div>
            </div>

            {/* Founder Card Section */}
            <div className="founder-card">
                <div className="founder-card-inner">
                    <div className="founder-card-front">
                        <img 
                            src="https://cdn0.iconfinder.com/data/icons/boy-job/353/boy_occupation_work_cute_cartoon_bussiness-03-512.png" 
                            alt="Founder" 
                            className="founder-photo" 
                        />
                        <h3 className="founder-name">Paras Diwakar</h3>
                        <p className="founder-role">Founder & Developer</p>
                    </div>
                    <div className="founder-card-back">
                        <p>
                            Paras is the visionary behind our Photo Editor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
