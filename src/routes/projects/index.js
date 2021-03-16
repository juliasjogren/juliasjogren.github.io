import React from "react";
// import Router from "./router";
import styled from "styled-components";
import projectData from "../../projectData";


function Projects(props) {
	const activeProjectName = props.match.params.name;
	const activeProject = projectData.find(
		(project) => project.name === activeProjectName
	);  
	console.log(activeProjectName);

	return (
		<ProjectsWrap>
			{activeProject && activeProject !== null ? (
				<Project>
					<Title className="title">{activeProject.name}</Title>
					<Picture className="picture" alt="" src={`/${activeProject.picture}`} />
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

`;
const Project = styled.div`
&& {
  display: flex;
  flex-direction: column;
  justify-content: center;
 
}
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
`;
const Link = styled.a`
  font-size: 20px;
  color: darkgrey;
  align-self: center;
  text-align: center;
  margin-bottom: 3%;
  &:hover {
    color: black;
  }
  `;
  
const TextArea = styled.div`
  text-align:center;
  align-self: center;
  border: 2px solid lightgray;
  box-shadow: 8px 5px 5px gray;
  width: 60%;
  padding:2%;
  margin-bottom: 3%;

`;
const Picture = styled.img`
  margin: 3%;
  align-self: center;
	height: 400px;
	width: 70%;
`;
