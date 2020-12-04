import React from 'react';
import mydata from './mydata';
import Contact from './Contact';
import Header from '/Nav';

const About = () => {
    return (
        <div>
            <Header name={mydata.name} contact={mydata.email}></Header>
            <div className="about-container">
                <h1>{mydata.about}</h1>
                <p>{mydata.myInfo}</p>
                <div classname="contact-container">
                    <Contact contact={mydata.contact}
                        contactData={mydata.contactData}
                        myLinks={mydata.myLinks}>
                    </Contact>
                </div>
            </div>
        </div>
    );
}

export default About;