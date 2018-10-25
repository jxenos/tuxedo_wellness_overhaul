import React, {Component} from "react";
import NavContainer from "./NavContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ContactContainer from '../containers/ContactContainer';
import HomeContainer from '../containers/HomeContainer';
import NewsContainer from '../containers/NewsContainer';
import TeamContainer from '../containers/TeamContainer';
import ScheduleContainer from '../containers/ScheduleContainer';
import FooterContainer from '../containers/FooterContainer';
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
								<Router>
										<React.Fragment>
												<div className="navContainer">
														<NavContainer/>
												</div>
												<div className="siteContent">
														<Route exact path="/" component={HomeContainer}/>
														<Route exact path="/schedule" component={ScheduleContainer}/>
														<Route exact path="/team" component={TeamContainer}/>
														<Route exact path="/news" component={NewsContainer}/>
														<Route exact path="/contact" component={ContactContainer}/>
												</div>
												<FooterContainer/>
										</React.Fragment>
								</Router>
						</div>
				);
		}
}

export default App;
