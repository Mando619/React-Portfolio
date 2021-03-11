import React from 'react';
import userData from '../data';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const About = () => {
    return (
        <div>
            <div className="about_container">
                <h2>{userData.aboutMe}</h2>
            </div>
        </div>
    )
}

export default About;