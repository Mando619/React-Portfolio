import React from 'react';
import userData from '../data';
import './projects.css';

const Projects = () => {
    return (
        <div className="container">
            <div className="card_container">
                {userData.projects.map((project) => (
                    <div key={project.id} className="project">
                        <div className="project_image">
                            <a href={project.url}>
                                <img src={project.photo} alt={project.title}></img>
                            </a>
                        </div>
                        <div className="title">{project.title}
                        </div>
                        <p>{project.projectDescription}</p>
                        <a className="button" href={project.github}>
                            <i className="fab fa-github"></i>
                                    Github Repository
                                </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;