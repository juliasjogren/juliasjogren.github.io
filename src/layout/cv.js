import React from "react";
import styled from "styled-components";
// import projectData from "../../projectData";

function Cv() {
	const intro1 =
		"I have made this website using html, css, JavaScript with React.js, as a way to showcase some of my projects and to share information about me. feel free to explore the site and learn more about me and explore some of my projects.";
	const intro2 =
		"I have my own web development company where i accept work assignments to develop webpages. I am passionate about programming and eager to learn more and develop my coding skills. I will keep this page up to date with my latest projects. ";
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
			text:
				"Hjälpa Utveckling av javaScript komponent som skapar en grupp av SVGs ",
		},
		{
			role: "Webbutvecklingsuppdrag",
			company: "Compr",
			time: "2020 -",
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
			<IText>
				<Name>Julia Sjögren</Name>
				<IntroText>{intro1}</IntroText>
				<IntroText>{intro2}</IntroText>
				<Contact>
					<TitleC>Contact :</TitleC>
					<LineL />
				</Contact>
				<Link href="https://www.linkedin.com/in/julia-sj%C3%B6gren-b4a379148/">
					LinkedIn
				</Link>
				<Link href="https://github.com/juliasjogren">github</Link>
			</IText>
			<Exp>
				<Wrap>
					<Title>Arbetserfarenhet</Title>
					<Line style={{ borderBlockColor: "#afafaf" }} />
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
				</Wrap>
				<Wrap>
					<Title>Utbildning</Title>
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
				<Wrap>
					<Title>Programmering </Title>
					<FactItem>Coding Languages</FactItem>
					<FactText>Java, .Net/C#, Html, CSS, SQL</FactText>
					<FactItem>Tools</FactItem>
					<FactText>Git, NodeJsL</FactText>
					<FactItem>JavaScript:</FactItem>
					<FactText>
						React, Redux, Styled-components, Pixi(2D), Vue, TypeScript
					</FactText>
				</Wrap>
			</Exp>
		</CvWrap>
	);
}

export default Cv;

const CvWrap = styled.div`
	display: flex;
	justify-content: center;
	height: 850px;
`;
const IText = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #2b2b2a;
	color: #afafaf;
	width: 40%;
	padding: 10px;
	padding-top: 0;
`;
const Name = styled.div`
	text-align: center;
	font-size: xxx-large;
	padding: 10px;
`;
const IntroText = styled.div`
	font-size: 18px;
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
const TitleC = styled.div`
	padding: 10px;
	font-family: Oblique Rain;
	font-size: 30px;
`;
const Exp = styled.div`
	padding: 20px;
	width: 60%;
`;
const Wrap = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	padding-bottom: 0;
	flex-direction: column;
`;

const Title = styled.div`
	padding: 5px;
	text-align: center;
	font-family: Oblique Rain;
	font-size: 24px;
`;
const FactWrap = styled.div`
	padding: 10px;
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
