import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavContainer from "./NavContainer";
import HomeContainer from './HomeContainer';
import {getUserAgentInfo} from "../utils/app-utils";
import "../styles/App.css";

class App extends Component {
		constructor(props) {
				super(props);
				this.state = {
						userAgent: {}
				};
		}

		componentDidMount() {
				const agent = getUserAgentInfo();
				this.setState({userAgent: agent});
		}

		render() {
				return (
						<div className="appContainer">
								<div className="navContainer">
										<NavContainer/>
								</div>
								<div className="pagesContainer">
										<HomeContainer/>
								</div>
						</div>
				);
		}
}

export default App;
