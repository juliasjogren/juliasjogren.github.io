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
					<TextWrap>
						<Title className="title">{activeProject.name}</Title>
						<Line />
						<TextArea>{activeProject.content}</TextArea>
						<Link href={activeProject.link}>Visit Site</Link>
					</TextWrap>
					<Wrap>
						<Picture
							className="picture"
							alt=""
							src={`/${activeProject.picture}`}
						/>
					</Wrap>
				</Project>
			) : (
				<div className="NoProject">No project</div>
			)}
		</ProjectsWrap>
	);
}

export default Projects;

const ProjectsWrap = styled.div`
	display: flex;
	margin-right: 115px;
`;
const Project = styled.div`
	display: flex;
	flex-direction: row;
`;
const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #2b2b2a;
	color: #afafaf;
	width: 50%;
	height: 950px;
	padding: 15px;
`;
const Wrap = styled.div`
	display: flex;
	flex-direction: column;
`;
const Title = styled.div`
	/* text-align: center; */
	padding-left: 10px;
	font-size: 30px;
`;
const Link = styled.a`
	font-size: 20px;
	color: #afafaf;
	align-self: flex-end;
	&:hover {
		color: #3c4771;
	}
`;

const TextArea = styled.div`
	padding: 10px;
	margin-bottom: 3%;
`;
const Picture = styled.img`
	margin: 3%;
	align-self: center;
	height: 400px;
	width: 90%;
`;
const Line = styled.div`
	border: 1px solid #afafaf;
	margin-top: 10px;
	margin-bottom: 10px;
`;
