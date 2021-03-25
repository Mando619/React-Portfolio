import React from 'react';
import Nav from '../Components/Nav/Nav';
import About from '../Components/About/About';
//import Skills from '../Components/Skills/Skills';
import userData from '../Components/data';
import Card from '../Components/Card/Card';
import Portfolio from '../Components/Projects/Projects';


const HomePage = () => {
    return (
        <div className="home_page">
            <Nav></Nav>
            <Card myImage={userData.myImage}></Card>
            <About aboutMe={userData.aboutMe}></About>
            <Portfolio portfolio={userData.projects}></Portfolio>
        </div>
    )
}

export default HomePage;