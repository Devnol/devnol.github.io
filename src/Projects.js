import React from 'react'
import './styles/Projects.css'

function Project({project}) {
	return(
		<a href={project.url} target="_blank" rel="noreferrer">
		<div class="project">
			<img src={project.icon} id="projIcon" alt={project.name}></img>
			<div class="container">
				<ul>
					<li>
						<a id="projTitle">{project.name}</a>
						<h2 id="projDesc">{project.description}</h2>
						<p id="projMade">Made with: {project.lang}</p>
					</li>
				</ul>
			</div>
		</div>
		</a>
	)
}
export default Project;