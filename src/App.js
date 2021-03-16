import React from "react";
import Router from "./router";
import styled from "styled-components";
import './App.css';


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
@media (min-width: 1070px) {
  width: 80%;
  margin-left: 10%;
}
`;
