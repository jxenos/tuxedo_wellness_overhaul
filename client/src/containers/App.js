import React, { Component } from "react";
import NavContainer from "./NavContainer";
import { getUserAgentInfo } from "../utils/app-utils";
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
		this.setState({ userAgent: agent });
	}

	render() {
		return (
			<div className="appContainer">
				<NavContainer />
			</div>
		);
	}
}

export default App;
