import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaMedium } from 'react-icons/fa';
import userData from '../data';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer_container">
                <div className="footer_links">
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
            </div>
        </div>
    )
}

export default Footer;