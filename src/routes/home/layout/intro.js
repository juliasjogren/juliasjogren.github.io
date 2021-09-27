import React from "react";
import styled from "styled-components";
// import projectData from "../../projectData";

function Intro() {
	const intro1 =
		"I have made this website using html, css, JavaScript with React.js, as a way to showcase some of my projects and to share information about me. feel free to explore the site and learn more about me and explore some of my projects.";
	const intro2 =
		"I have my own web development company where i accept work assignments to develop webpages. I am passionate about programming and eager to learn more and develop my coding skills. I will keep this page up to date with my latest projects. ";

	return (
		<IntroWrap>
			<Name>Julia Sjögren</Name>
			<IntroText>{intro1}</IntroText>
			<IntroText>{intro2}</IntroText>
			<Contact>
				<ContactTitle>Contact :</ContactTitle>
				<Line />
			</Contact>
			<Link href="https://www.linkedin.com/in/julia-sj%C3%B6gren-b4a379148/">
				LinkedIn
			</Link>
			<Link href="https://github.com/juliasjogren">github</Link>
		</IntroWrap>
	);
}

export default Intro;

const IntroWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	font-family: calibri;
	background-color: #2b2b2a;
	color: #afafaf;
	width: 350px;
	padding: 3%;
`;
const Name = styled.div`
	text-align: center;
	font-size: xxx-large;
	padding: 10px;
`;
const IntroText = styled.div`
	font-size: 17px;
	padding: 10px;
`;
const Contact = styled.div`
	text-align: left;
	margin: 10px;
	margin-top: 250px;
`;
const Link = styled.a`
	text-decoration: none;
	color: #afafaf;
	font-size: 20px;
	padding: 10px;
	text-align: left;
	:hover {
		text-decoration: underline;
	}
`;
const ContactTitle = styled.div`
	padding: 10px;
	font-family: open Sans;
	font-size: 30px;
`;
const Line = styled.div`
	border: 1px solid #afafaf;
`;
