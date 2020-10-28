import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { routeNames } from "./router.constants";
import Header from "../layout/Header";
import Home from "../routes/home";
import About from "../routes/about";
import Projects from "../routes/projects";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Switch>
					<Route exact path={routeNames.home} component={Home} />
					<Route path={routeNames.about} component={About} />
					<Route exact path={routeNames.projects} component={Projects} />
				</Switch>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

const Routes = styled.div`
	padding: 3%;
	width: 82%;
`;
