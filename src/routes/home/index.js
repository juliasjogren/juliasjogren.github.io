import React from "react";
import styled from "styled-components";
import projectData from "../../projectData";
import Intro from "./layout/intro";
import News from "./layout/news";
import Header from "../../layout/Header";

function Home() {
	const newsProject = projectData.find((p) => p.name === "Scrabble");

	return (
		<HomeWrap>
			<IntroWrap>
				<StyledIntro />
			</IntroWrap>
			<Wrap>
				<Header />
				<NewsWrap />
			</Wrap>
		</HomeWrap>
	);
}

export default Home;

const HomeWrap = styled.div`
	display: flex;
`;
const IntroWrap = styled.div`
	display: flex;
	width: 30%;
`;
const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
`;
const StyledIntro = styled(Intro)``;

const NewsWrap = styled(News)``;
