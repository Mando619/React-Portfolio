import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Contact from './Contact';
import HomePage from './HomePage'
import userData from './data';


const Starter = () => {
    return (
        <div className="start">
            <Header name={userData.name} myContact={userData.myContact}></Header>
            <HomePage name={userData.starterName} MyParagraph={userData.myInfo} myImage={userData.startImage} myLinks={userData.myLinks}></HomePage>
            <Portfolio projects={userData.projects}></Portfolio>
            <Contact contact={userData.myContact} ></Contact>
        </div>
    )
}

export default Starter;