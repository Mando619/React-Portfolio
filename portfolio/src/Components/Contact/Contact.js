import React from 'react';
import userData from '../data.js';
import { FaPhone } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <p>For further inquiries, you can reach me at 619-309-9330<FaPhone></FaPhone></p>
                <a href={`mailto:${userData.myContact}`}>Estrada.Mando7@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;