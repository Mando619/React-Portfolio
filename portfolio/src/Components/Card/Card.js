import React from 'react';
import './card.css';
import userData from '../data';
import { FaGithub, FaLinkedin, FaFacebook, FaMedium } from 'react-icons/fa';

const Card = () => {
    return (
        <div>
            <div className="card">
                <img className="picture" src={userData.myImage} alt="Author"></img>
                <p>{userData.name}</p>
                <p className="title">Full Stack Web developer</p>
                <br></br>
                <p className="skills">JavaScript | ReactJS | MERN Stack</p>
                <div className="social_links">
                    <a href={userData.myLinks[0].url}>
                        <FaGithub></FaGithub>
                    </a>
                    <a href={userData.myLinks[1].url}>
                        <FaLinkedin></FaLinkedin>
                    </a>
                    <a href={userData.myLinks[2].url}>
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href={userData.myLinks[3].url}>
                        <FaMedium></FaMedium>
                    </a>
                    <p><button>Contact</button></p>
                </div>
            </div>
        </div>
    );
}

export default Card;