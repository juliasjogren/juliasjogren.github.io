import React from "react";
import styled from "styled-components";
// import './App.css';

function Home() {
	const intro1 =
		"I have made this website using html, css, JavaScript with React.js, as a way to showcase some of my projects and to share information about me. feel free to explore the site and learn more about me and explore some of my projects.";
	const intro2 =
		"I have my own web development company where i accept work assignments to develop webpages. I am passionate about programming and eager to learn more and develop my coding skills. I will keep this page up to date with my latest projects. ";

	return (
		<HomeWrap>
			<IntroText1>{intro1}</IntroText1>
			<IntroText2>{intro2}</IntroText2>
		</HomeWrap>
	);
}

export default Home;

const HomeWrap = styled.div`
	display: flex;
	flex-direction: row;
`;
const IntroText1 = styled.div`
	margin: 2%;
	padding: 2%;
	border: 2px solid lightgray;
	font-size: medium;
	margin-bottom: 60px;
	box-shadow: 8px 5px 5px gray;
`;
const IntroText2 = styled.div`
	margin: 2%;
	padding: 2%;
	border: 2px solid lightgray;
	font-size: medium;
	margin-top: 60px;
	box-shadow: 8px 5px 5px gray;
`;
