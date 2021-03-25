import React from 'react';
import userData from '../data';
import Card from '../Card/Card';
import './about.css';
const About = () => {
    return (
        <div>

            <div className="about_container">
                <p>Hello...</p>
                <h2>{userData.aboutMe}</h2>
                <a className="btn" href={userData.myResume}>
                    <i class="fal fa-file-user"></i>
                                    My resume
                                </a>
            </div>
        </div>
    )
}

export default About;