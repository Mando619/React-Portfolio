import React from 'react';
import Nav from './Nav';
import About from './About';
import Portfolio from './Work';
import Contact from './Contact';
import mydata from './mydata';

const Start = () => {
    return(
        <div className="start">
            <Nav name={mydata.name} contact={mydata.contact}></Nav>
            <About name={mydata}></About>

        </div>
    )
}