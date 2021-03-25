import React from 'react';
//import userData from '../data';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import './skills.css';

const Skills = () => {
    return (
        <div className="skills_column">
            <h3>Skills</h3>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <FaReact></FaReact>
            <i className="devicon-mysql-plain-wordmark"></i>
            <FaNodeJs></FaNodeJs>
            <FaHtml5></FaHtml5>
            <FaCss3></FaCss3>
        </div>
    )
}

export default Skills;