import React from "react";
import styled from "styled-components";
// import './App.css';

function Info() {
	const intro =
		"I begun learning programming while I studied a bachelor in informatics at Lunds university. During my education I learned Java, C#, SQL, HTML, CSS and JavaScript. Programming is something I have gotten really intrested in and after the informatics program i took a couple of smaller courses mainly in Javascript to improve my skills. The most mention whorty project im invilved in right now is a project named Comparency where i develop a website along with some others in a initative to help people make more environmentally conscious choices in their purchases. im also invloved with a couple of smaller projects with a friend mostly for fun an to improve and try new things. Since games is a interest of mine I have been learning programming by making games.";
	const education =
		"In high school I studied social sience and specialized in economics. At Lunds University I studied an bachelor in informatics although I have a few points left before I recieve my degree. During my studies I learned the programming languages Java, C#, SQL and Javascript. I learned about modelling by using UML and about database notations like Crowfoot and Chen. The informatics programme had a wide focus group and from a system perspective I learned about systems design, economics and organizations. I learned about the value of the system in an oganization and how to make and use to promote different parts of an ogranization.";
	const workXp =
		"After High school and before I started my studies at Lunds University I worked in a second-hand bookshop as a saleswoman and in 2014 I had a summer job at Qlear AB where I worked with input and structuring data in their CRM tool Sugar. in my last year of studies I worked as an lab assistent where I helped the prevous grades with their programming assignments. after my informatics studies i have studied some courses in javascript and started my own company where i take on assignments to develop software particularly web-development. I recently had an assignment at Qlear AB where i developed an component that generates an Svg image that can be modefied by the employees to create tailored pages to their CRM tool.";

	return (
		<AboutWrap>
			{/* <Text1>{intro}</Text1> */}
			<Title>Work Experience</Title>
			<Line />
			<Text>{workXp}</Text>
			<Title>Education</Title>
			<Line />
			<Text>{education}</Text>
		</AboutWrap>
	);
}

export default Info;

const AboutWrap = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	padding: 3%;
	background-color: #2b2b2a;
	color: #afafaf;
`;

const Title = styled.div`
	margin-right: 4%;
	font-size: 24px;
`;
const Text = styled.div`
	margin-bottom: 10px;
`;

const Line = styled.div`
	margin-bottom: 10px;
	margin-top: 7px;
	border: 1px solid #afafaf;
`;
