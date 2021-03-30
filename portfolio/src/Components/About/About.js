import React from 'react';
import userData from '../data';
import './about.css';
import Card from '../Card/Card'

const About = () => {
    return (
        <div>

            <div className="about_container">
                <div className='image_container'>
                    <img className="image" src={userData.backGroundImage} alt="BackGround"></img>

                    <div className="description">
                        <p>Hello...</p>
                        <h2>{userData.aboutMe}</h2>
                        <a className="btn" href={userData.myResume}>
                            <i class="fal fa-file-user"></i>
                                    My resume
                                </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;