import React from 'react';
import Nav from '../Components/Nav/Nav';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import userData from '../Components/data';
import Card from '../Components/Card/Card';
import Projects from '../Components/Projects/Projects';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="home_page">
            <Nav></Nav>
            <About aboutMe={userData.aboutMe}></About>
            <Card myImage={userData.myImage}></Card>
            <Skills></Skills>
            <Projects projects={userData.projects}></Projects>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;