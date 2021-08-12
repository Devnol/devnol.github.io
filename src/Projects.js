import React from 'react'
import './styles/Projects.css'

function Project({project}) {
	return(
		<a href={project.url}>
		<div class="project">
			<img id="projIcon" src={project.icon} alt={project.name}></img>
			<h4 id="projTitle">{project.name}</h4>
			<p id="projDescr">{project.description}</p>
			<p id="projMade">Made with: {project.lang}</p>
		</div>
		</a>
	)
}
export default Project;