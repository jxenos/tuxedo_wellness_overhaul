import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../images/logo.png';

export default() => {
		return (
				<React.Fragment>
						<div className="logoContainer">
								<img className="navLogo" src={Logo} alt="tuxedo_wellness_logo"/>
						</div>
						<div className="navMenuContainer">
								<ul>
										<li>
												<Link className="nav-link" to="/">
														{" "}
														Home
												</Link>
										</li>
										<li>
												<Link className="nav-link" to="/schedule">
														{" "}
														Schedule
												</Link>
										</li>
										<li>
												<Link className="nav-link" to="/news">
														{" "}
														News Feed
												</Link>
										</li>
										<li>
												<Link className="nav-link" to="/team">
														{" "}
														Meet the Team
												</Link>
										</li>
										<li>
												<Link className="nav-link" to="/contact">
														{" "}
														Contact
												</Link>
										</li>
								</ul>
						</div>
				</React.Fragment>
		);
};
