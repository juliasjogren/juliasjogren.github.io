import React from "react";
import Router from "./router";
import styled from "styled-components";
import "./App.css";

function App() {
	return (
		<AppWrap className="App">
			<Router />
		</AppWrap>
	);
}

export default App;

const AppWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 600px;
	max-width: 1000px;
	/* @media (min-width: 1070px) {
  width: 70%;
  margin-left: 15%;
} */
`;
