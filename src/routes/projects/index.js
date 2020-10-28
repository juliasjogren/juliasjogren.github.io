import React from "react";
// import Router from "./router";
import styled from "styled-components";
import projectData from "../../projectData";

function Projects(props) {
	console.log("hello", props);
	const activeProjectName = props.match.params.name;
	const activeProject = projectData.find(
		(project) => project.name === activeProjectName
	);
	console.log(activeProjectName);
	console.log(activeProject);

	return (
		<ProjectsWrap>
			{activeProject && activeProject !== null ? (
				<Project>
					<Title className="title">{activeProject.name}</Title>
					<Picture className="picture" src={activeProject.picture} />
					<Link href={activeProject.link}>Visit Site</Link>
					<TextArea>{activeProject.content}</TextArea>
				</Project>
			) : (
				<div className="NoProject">No project</div>
			)}
		</ProjectsWrap>
	);
}

export default Projects;

const ProjectsWrap = styled.div`
	&& {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
const Project = styled.div``;
const Title = styled.div``;
const Link = styled.a``;
const TextArea = styled.div``;
const Picture = styled.img`
	height: 500px;
	width: 30%;
`;
