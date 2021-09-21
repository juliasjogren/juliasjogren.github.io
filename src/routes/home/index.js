import React from "react";
import styled from "styled-components";
import projectData from "../../projectData";
import Cv from "../../layout/cv";

function Home() {
	const newsProject = projectData.find((p) => p.name === "Scrabble");
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
		<HomeWrap>
			<Cv />
			<News>
				{/* <Title>News: </Title> */}
				<Wrap>
					<ProjectName>{newsProject.name}</ProjectName>
					<Picture className="picture" alt="" src={`/${newsProject.picture}`} />
					<Text>
						PJ's latest game. Play Scrabble against all your friends...
					</Text>
					<Link href={newsProject.link}>PLAY GAME...</Link>
				</Wrap>
			</News>
		</HomeWrap>
	);
}

export default Home;

const HomeWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 115px;
`;

const News = styled.div`
	width: 80%;
	align-self: center;
`;
const Title = styled.div`
	padding: 1%;
	font-size: 25px;
`;
const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Picture = styled.img`
	width: 70%;
	height: 300px;
`;
const ProjectName = styled.div`
	margin-bottom: 1%;
	font-size: 25px;
	text-align: center;
`;
const Text = styled.div`
	margin-top: 1%;
	margin-bottom: 2%;
	font-size: 16px;
	text-align: center;
`;

const Link = styled.a`
	font-size: 20px;
	color: darkgrey;
	align-self: center;
	text-align: center;
	margin-bottom: 3%;
	&:hover {
		color: black;
	}
`;
