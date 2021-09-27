import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projectData from "../../projectData";
import cvpic from "../../assets/CVPic.jpeg";

const Header = () => {
	const [showProjectList, setShowProjectList] = useState(false);
	const t1 = "Julia Sjögren";
	const t2 = "Todo";

	// window.addEventListener("click", function (e) {
	// 	console.log("target", e.target);
	// 	if (e.target.id !== "projectLink") {
	// 		console.log("Not project link");
	// 		console.log(this.showProjectList);
	// 		this.showProjectList = false;
	// 	}
	// });

	return (
		<Wrap classname="Wrap">
			<HeaderWrap classname="headerWrap">
				<HeaderText classname="headerText">
					<L to={"/"}>
						<Title1>{t1}</Title1>
						<Title2>{t2}</Title2>
					</L>
				</HeaderText>
				<Buttons classname="buttons">
					<NavLink name="home">
						<L to={"/"}>Home</L>
					</NavLink>
					<NavLink name="about">
						<L to={"/About"}>About</L>
					</NavLink>
					<NavLink name="projects">
						<L to={"/Projects"}>Projects</L>
					</NavLink>
					{/* <NavLink
						name="projects"
						onClick={() => setShowProjectList(!showProjectList)}
					>
						Projects
						<Projectlist>
							{showProjectList &&
								projectData.map((project) => (
									<Project id="projectLink" key={project.id}>
										<L to={`/projects/${project.name}`}>{project.name}</L>
									</Project>
								))}
						</Projectlist>
					</NavLink> */}
				</Buttons>
			</HeaderWrap>
			<Pic className="picture" alt="" src={cvpic} />
		</Wrap>
	);
};

export default Header;

const Wrap = styled.div`
	background: #3c4771;
	/* background: #4a5684; */
	/* background: #0086b3; */
	font-family: calibri;
	width: 100%;
	max-height: 120px;
	text-align: center;
	display: flex;
`;
const HeaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
`;
const HeaderText = styled.div`
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: serif;
	color: rgb(228, 224, 224);
`;
const Title1 = styled.div`
	font-size: xx-large;
`;
const Title2 = styled.div`
	font-size: small;
`;
const Buttons = styled.div`
	width: 100%;
	background-color: #2b2b2a;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30%;
	font-size: larger;
`;
const Projectlist = styled.div`
	cursor: initial;
	list-style: none;
	position: absolute;
	top: 100%;
	width: 100%;
	z-index: 1;
	background-color: #2b2b2a;
	display: flex;
	flex-direction: column;
`;
const Project = styled.div`
	padding: 3%;
`;
const L = styled(Link)`
	text-decoration: none;
	color: #afafaf;
	cursor: pointer;
	padding-left: 30px;
	padding-right: 30px;
`;
const Pic = styled.img`
	border: black 3px solid;
	height: 200px;
	justify-self: end;
	z-index: 1;
`;
const NavLink = styled.div`
	position: relative;
	width: 33.333%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: calibri;
	text-decoration: none;
	color: #afafaf;
`;
