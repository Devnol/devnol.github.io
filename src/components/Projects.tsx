import '../styles/Projects.css'

function Project({project}) {
	return(
		<a href={project.url} target="_blank" rel="noreferrer">
		<div class="project">
			<img src={project.icon} id="projIcon" alt={project.name}></img>
			<div class="container">
				<ul>
					<li>
						<h4 id="projTitle">{project.name}</h4>
						<p id="projDesc">{project.description}</p>
						<p id="projMade">Made with: {project.lang}</p>
					</li>
				</ul>
			</div>
		</div>
		</a>
	)
}
export default Project;