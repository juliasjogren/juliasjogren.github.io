import React from "react";
import styled from "styled-components";
import Info from "./layout/info";
import Cv from "./layout/cv";

function About() {
	const introText =
		"I begun learning programming while I studied a bachelor in informatics at Lunds university. During my education I learned Java, C#, SQL, HTML, CSS and JavaScript. Programming is something I have gotten really intrested in and after the informatics program i took a couple of smaller courses mainly in Javascript to improve my skills. The most mention whorty project im invilved in right now is a project named Comparency where i develop a website along with some others in a initative to help people make more environmentally conscious choices in their purchases. im also invloved with a couple of smaller projects with a friend mostly for fun an to improve and try new things. Since games is a interest of mine I have been learning programming by making games.";

	return (
		<AboutWrap>
			<StyledInfo />
			<Wrap>
				<IntroText>{introText}</IntroText>
				<Cv />
			</Wrap>
		</AboutWrap>
	);
}

export default About;

const AboutWrap = styled.div`
	display: flex;
	/* flex-direction: column; */
	margin-right: 115px;
`;
const StyledInfo = styled(Info)`
	width: 350px;
`;
const IntroText = styled.div`
	padding: 25px;
	font-size: 18px;
	font-family: calibri;
	font-size: 17px;
	/* background-color: #2b2b2a; */
	/* color: #afafaf; */
`;
const Wrap = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	/* margin-right: 115px; */
`;
