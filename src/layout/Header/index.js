import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
	const t1 = "Julia Sjögren";
	const t2 = "Front-end developer";

	return (
		<Wrap classname="Wrap">
			<HeaderText classname="headerText">
				<L to={"/"}>
					<Title1>{t1}</Title1>
					<Title2>{t2}</Title2>
				</L>
			</HeaderText>
			<Buttons classname="buttons">
				<NavLink name="home">
					<L to={"/"}>Home</L>
				</NavLink>
				<NavLink name="about">
					<L to={"/About"}>About</L>
				</NavLink>
				<NavLink name="projects">
					<L to={"/Projects"}>Projects</L>
				</NavLink>
			</Buttons>
		</Wrap>
	);
};

export default Header;

const Wrap = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	text-align: center;
	background: #3c4771;
	/* background: #4a5684; */
	/* background: #0086b3; */
	font-family: calibri;
`;

const HeaderText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	font-family: serif;
	color: rgb(228, 224, 224);
`;
const Title1 = styled.div`
	font-size: xx-large;
`;
const Title2 = styled.div`
	font-size: 14px;
`;
const Buttons = styled.div`
	background-color: #2b2b2a;
	display: flex;
	font-size: larger;
`;

const L = styled(Link)`
	text-decoration: none;
	color: #afafaf;
	cursor: pointer;
	padding: 10px;
`;

const NavLink = styled.div`
	width: 33.333%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	font-family: calibri;
	color: #afafaf;
	text-decoration: none;
`;
