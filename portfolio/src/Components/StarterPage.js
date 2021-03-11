import React from 'react';
import Nav from './Nav/Nav';
import Card from './Card/Card';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';

const StarterPage = () => {
    return (
        <div className="starter">
            <Nav></Nav>
            <Card></Card>
            <Portfolio></Portfolio>
        </div>
    )
}

export default StarterPage;