import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaMedium, FaCopyright } from 'react-icons/fa';
import userData from '../data';
import './footer.css'



const Footer = () => {
    return (
        <div>
            <div className="footer_container">
                <div className="footer_links">
                    <button>
                        <a href={userData.myLinks[0].url}>
                            <FaGithub></FaGithub>
                        </a>
                    </button>
                    <button>
                        <a href={userData.myLinks[1].url}>
                            <FaLinkedin></FaLinkedin>
                        </a>
                    </button>
                    <button>
                        <a href={userData.myLinks[2].url}>
                            <FaFacebook></FaFacebook>
                        </a>
                    </button>
                    <button>
                        <a href={userData.myLinks[3].url}>
                            <FaMedium></FaMedium>
                        </a>
                    </button>
                    <div className="copyright">
                        <p><FaCopyright></FaCopyright> 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;