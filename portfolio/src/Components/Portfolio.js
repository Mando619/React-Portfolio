import React from 'react';

const Portfolio = ({ projectData }) => {
    return (
        <div className="container">
            <h2>Projects</h2>
            <div classname="projects-container">
                {projectData.map((projects) => (
                    <div key={projects.id} className="projects">
                        <div className="projectImages">
                            <a href={projects.url}>
                                <img src={projects.img} alt={projects.title}></img>
                            </a>
                        </div>
                        <div classname="title">
                            {projects.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;