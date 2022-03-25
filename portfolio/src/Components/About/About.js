import React from 'react';
import userData from '../data';
import './about.css';


const About = () => {
    return (
        <div>
            <div className="about_container">
                <div className='image_container'>
                    <img className="center" src={userData.backGroundImage} alt="BackGround"></img>
                    <div className="description">
                        <p>{userData.aboutMe}</p>
                        <a className="btn" href={userData.myResume}>
                            <i class="fal fa-file-user"></i>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;