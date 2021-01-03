import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import userData from './data';


const Contact = () => {

  return (
    <div className="contact_container">
      <p>{userData.contactData}</p>
      <br></br>
      <h3>For further inquiries, you can contact me @</h3>
      <div className="social_links">
        <ul>
          <li>
            <a href={`mailto:${userData.myContact}`}>
              <FaEnvelope></FaEnvelope>
            </a>
          </li>
          <li>
            <a href={userData.myLinks[0].url}>
              <FaGithub></FaGithub>
            </a>
          </li>
          <li>
            <a href={userData.myLinks[1].url}>
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li>
            <a href={userData.myLinks[2].url}>
              <FaFacebook></FaFacebook>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}



export default Contact;
