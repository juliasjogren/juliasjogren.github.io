import React from "react";
import styled from "styled-components";
// import projectData from "../../projectData";

function Cv() {
	const intro1 =
		"I begun learning programming while I studied a bachelor in informatics at Lunds university. During my education I learned Java, C#, SQL, HTML, CSS and JavaScript. Programming is something I have gotten really intrested in and after the informatics program i took a couple of smaller courses mainly in Javascript to improve my skills.";
	const intro2 =
		"I have also started my own web developing company where i have had a few assignments. In my spare time im invloved with a couple of smaller projects with a friend mostly for fun an to improve and try new things. Since games is a interest of mine I have been learning programming by making games.";
	const workexp = [
		{
			role: "ButiksBiträde",
			company: "Antikvariat Läslustan",
			time: " 2011-2014",
			text: "Expediera kunder, inköp av böcker, organisering i butik. ",
		},
		{
			role: "Sommarjobb databehandling",
			company: "Qlear AB ",
			time: " 2014",
			text: "Inmatning och strukturering av data i CRM-verktyg (sugar) ",
		},
		{
			role: "Labbassistent",
			company: "Lunds Universitet ",
			time: "2016 - 2017",
			text: "Hjälpa lägre årskurser med uppgifter ",
		},
		{
			role: "Webbutvecklingsuppdrag",
			company: "Qlear AB",
			time: "2019 -2020",
			text: "Utveckling av javaScript komponent som skapar en grupp av SVGs ",
		},
		{
			role: "Webbutvecklingsuppdrag",
			company: "Compr",
			time: "2020 - 2021",
			text:
				"Utveckling av hemsida i JavaScript, React.js, Redux.js, Styled-components ",
		},
	];
	const education = [
		{
			role: "Samhällsvetenskap",
			place: "Spyken, Lund",
			time: "2009 - 2012",
			text: "Samhällsvetenskaplig linje med inriktning på ekonomi ",
		},
		{
			role: "Systemvetenskap",
			place: " Lunds Universitet ",
			time: "2014 - 2017",
			text:
				"Systemvetenskaplig kandidatutbildning, kandidatexamen i systemvetenskap med huvudområde informatik ",
		},
	];

	return (
		<CvWrap>
			<IntroText>{intro1}</IntroText>
			<IntroText>{intro2}</IntroText>
			<Wrap>
				{/* <Title>Utbildning</Title> */}
				<Line />
				{education.map((item) => (
					<FactWrap key={item.time}>
						<FactItems>
							<FactItem>{item.role}</FactItem>
							<Space>{" | "}</Space>
							<FactItem>{item.place}</FactItem>
							<Space>{" | "}</Space>
							<FactItem>{item.time}</FactItem>
						</FactItems>
						<FactText>{item.text}</FactText>
					</FactWrap>
				))}
			</Wrap>
			<WorkWrap>
				{/* <Title>Arbetserfarenhet</Title> */}
				<Line />
				{workexp.map((item) => (
					<FactWrap key={item.time}>
						<FactItems>
							<FactItem>{item.role}</FactItem>
							<Space>{" | "}</Space>
							<FactItem>{item.company}</FactItem>
							<Space>{" | "}</Space>
							<FactItem>{item.time}</FactItem>
						</FactItems>
						<FactText>{item.text}</FactText>
					</FactWrap>
				))}
			</WorkWrap>
			{/* <Wrap>
				<Title>Programmering </Title>
				<FactItem>Coding Languages</FactItem>
				<FactText>Java, .Net/C#, Html, CSS, SQL</FactText>
				<FactItem>Tools</FactItem>
				<FactText>Git, NodeJsL</FactText>
				<FactItem>JavaScript:</FactItem>
				<FactText>
					React, Redux, Styled-components, Pixi(2D), Vue, TypeScript
				</FactText>
			</Wrap> */}
		</CvWrap>
	);
}

export default Cv;

const CvWrap = styled.div``;

const IntroText = styled.div`
	padding: 20px;
	font-size: 18px;
	font-family: calibri;
	font-size: 17px;
	/* background-color: #2b2b2a; */
	/* color: #afafaf; */
`;

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	padding-bottom: 0;
	flex-direction: column;
	margin-bottom: 90px;
`;
const WorkWrap = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	padding-bottom: 0;
	flex-direction: column;
	margin-top: 226px;
`;

const Title = styled.div`
	padding: 5px;
	text-align: center;
	font-family: calibri;
	font-size: 24px;
`;
const FactWrap = styled.div`
	padding: 10px;
	/* margin-bottom: 10px; */
`;
const FactItems = styled.div`
	display: flex;
	flex-direction: row;
`;
const FactItem = styled.div`
	font-family: Lucida Sans Unicode;
`;
const FactText = styled.div`
	font-family: calibri;
`;

const Space = styled.div`
	font-weight: bolder;
	padding-left: 10px;
	padding-right: 10px;
`;
const Line = styled.div`
	border: 1px solid black;
`;
const LineL = styled.div`
	border: 1px solid #afafaf;
`;
