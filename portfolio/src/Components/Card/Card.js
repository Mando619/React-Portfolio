import React from 'react';
import './card.css';
import userData from '../data';
import { FaGithub, FaLinkedin, FaFacebook, FaMedium, FaPhone } from 'react-icons/fa';


const Card = () => {
    return (
        <div>
            <div className="card_container">
                <img className="picture" src={userData.myImage} alt="Author"></img>
                <p>{userData.name}</p>
                <p className="title">Full Stack Web developer</p>
                <br></br>
                <p className="skills">JavaScript | ReactJS | MERN Stack</p>
                <br></br>
                <div className="links">
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
                </div>

                <div className="cardButton">
                    <a href={`mailto:${userData.myContact}`}>
                        <p><button>Contact</button></p>
                    </a>
                    <p>619-309-9330<FaPhone></FaPhone></p>

                </div>
            </div>
            {/* <p className="aboutMe"> 0]
                                  Below are links to my projects and works I have completed. Still continuing my growth and knowledge by 
                                  perfecting my already known skills, and learning more amongst other languages.
                                    
                                </p> */}
        </div >
    );
}

export default Card;