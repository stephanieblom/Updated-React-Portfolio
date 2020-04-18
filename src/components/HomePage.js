import React from 'react';
import profilePic from './Assets-Images/IMG_0589.JPG';
import "./style.css";

function AboutPage() {

    return (
        <div className="hero">
        <br></br>
        <div className="row">
        <div className="col-lg-5">
            <img className="img img-thumbnail" id="myPhoto" src={profilePic}/>
        </div>
        <div className="col-lg-7">
        <h2>Welcome To My Portfolio!</h2>

            <p>Hi! My name is Stephanie Blom. I am beginning my new adventure into Web Development. I am a mechanical engineer who found a passion for coding.</p>
            <p>
                I also love hiking, running, skiing, snowboarding, yoga, and music!
            </p> 
        </div>
        </div>

        <nav className="navbar fixed-bottom">
            <a className="navbar-brand" href="#">Stephanie Blom - Home</a>
        </nav>

    </div>
    );
}

export default AboutPage;