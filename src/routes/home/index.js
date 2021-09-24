import React from "react";
import styled from "styled-components";
import projectData from "../../projectData";
import Intro from "./layout/intro";
import News from "./layout/news";

function Home() {
	const newsProject = projectData.find((p) => p.name === "Scrabble");

	return (
		<HomeWrap>
			<Intro />
			<NewsWrap />
		</HomeWrap>
	);
}

export default Home;

const HomeWrap = styled.div`
	display: flex;
	margin-right: 115px;
`;

const NewsWrap = styled(News)`
	/* width: 60%; */
	/* align-self: center; */
`;
