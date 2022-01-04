import React from "react";
import styled from "styled-components";
import Info from "./layout/info";
import Cv from "./layout/cv";
import Header from "../../layout/Header";

function About() {
	const introText =
		"I begun learning programming while I studied a bachelor in informatics at Lunds university. During my education I learned Java, C#, SQL, HTML, CSS and JavaScript. Programming is something I have gotten really intrested in and after the informatics program i took a couple of smaller courses mainly in Javascript to improve my skills.";
	const introText2 =
		"I have also started my own web developing company where i have had a few assignments. In my spare time im invloved with a couple of smaller projects with a friend mostly for fun an to improve and try new things. Since games is a interest of mine I have been learning programming by making games.";

	return (
		<AboutWrap>
			<IntroWrap>
				<StyledInfo />
			</IntroWrap>
			<Wrap>
				<Header />
				<Cv />
			</Wrap>
		</AboutWrap>
	);
}

export default About;

const AboutWrap = styled.div`
	display: flex;
`;
const IntroWrap = styled(Info)`
	display: flex;
`;
const StyledInfo = styled(Info)`
	display: flex;
`;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
`;
