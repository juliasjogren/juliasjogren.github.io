import React from "react";
import styled from "styled-components";
import projectData from "../../../projectData";

function News() {
	const newsProject = projectData.find((p) => p.name === "Scrabble");

	return (
		<Wrap>
			<Title>Latest news: </Title>
			<Line />
			<ProjectName>{newsProject.name}</ProjectName>
			<Picture className="picture" alt="" src={`/${newsProject.picture}`} />
			<Text>
				PJ's latest developed game made with Javascript, React, Webpack. Our
				Take on the classic boardgame Scrabble Where you write words with the
				goal to score as many points as possible. Challenge all your friends and
				fight for the honorable title as word master...
			</Text>
			<Link href={newsProject.link}>Try for yourself...</Link>
		</Wrap>
	);
}

export default News;

const Wrap = styled.div`
	display: flex;
	font-family: calibri;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.div`
	padding-top: 15px;
	font-size: 30px;
`;

const Line = styled.div`
	border: 1px solid black;
	width: 80%;
	margin-bottom: 20px;
`;
const Picture = styled.img`
	width: 80%;
	height: 350px;
`;
const ProjectName = styled.div`
	margin-bottom: 1%;
	font-size: 25px;
	text-align: center;
`;
const Text = styled.div`
	margin: 10px;
	padding: 20px;
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
