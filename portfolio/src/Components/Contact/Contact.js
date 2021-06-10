import React from 'react';
import userData from '../data.js';
import './contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <a href={`mailto:${userData.myContact}`}>Estrada.Mando7@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;