import React from "react";
import styled from "styled-components";
import projectData from "../../projectData"

function Home() {
  const newsProject = projectData.find(p => p.name === "Scrabble")
	const intro1 =
		"I have made this website using html, css, JavaScript with React.js, as a way to showcase some of my projects and to share information about me. feel free to explore the site and learn more about me and explore some of my projects.";
	const intro2 =
		"I have my own web development company where i accept work assignments to develop webpages. I am passionate about programming and eager to learn more and develop my coding skills. I will keep this page up to date with my latest projects. ";

	return (
		<HomeWrap>
      <Intro> 
			<IntroText1>{intro1}</IntroText1>
			<IntroText2>{intro2}</IntroText2>
      </Intro>
      <News>
        <Title>News: </Title>
        <Wrap>
          <ProjectName>{newsProject.name}</ProjectName>
          <Picture className="picture" alt="" src={`/${newsProject.picture}`} />
          <Text>PJ's latest game. Play Scrabble against all your friends...</Text>
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
`;
const Intro = styled.div`
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
const News = styled.div`
  margin-top: 3%;
  width: 80%;
  align-self: center;
  border: 2px solid lightgray;
`;
const Title = styled.div`
padding: 1%;
font-size: 25px;
`;
const Wrap = styled.div`
  display:flex;
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
