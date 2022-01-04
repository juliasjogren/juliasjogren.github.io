import React, { useState } from "react";
// import Router from "./router";
import styled from "styled-components";
import projectData from "../../projectData";
import Header from "../../layout/Header";

function Projects(props) {
	const [activeProject, setActiveProject] = useState(projectData[0]);
	// const activeProjectName = props.match.params.name;
	// const activeProject = projectData.find(
	// 	(project) => project.name === activeProjectName
	// );

	return (
		<ProjectsWrap>
			<LeftWrap>
				<ProjectList>
					{projectData.map((item) => (
						<ListItem key={item.id} onClick={() => setActiveProject(item)}>
							{item.name}
							<Line />
						</ListItem>
					))}
				</ProjectList>
			</LeftWrap>
			<RightWrap>
				<Header />
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
			</RightWrap>
		</ProjectsWrap>
	);
}

export default Projects;

const ProjectsWrap = styled.div`
	display: flex;
	/* margin-right: 115px; */
`;
const LeftWrap = styled.div`
	display: flex;
	width: 30%;
`;
const ProjectList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 900px;
	/* padding: 3%; */
	padding-top: 30px;
	/* text-align: center; */
	background-color: #2b2b2a;
	color: #afafaf;
`;
const ListItem = styled.div`
	font-size: 20px;
	padding: 10px;
	font-family: calibri;
	cursor: pointer;
`;
const RightWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
`;
const Project = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	font-family: calibri;
	padding: 30px;
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
	margin-top: 5px;
	margin-bottom: 5px;
`;
