import React from "react";
import {Link} from "react-router-dom";

export default() => {
		return (
				<React.Fragment>
						<div className="logoContainer">Insert logo here</div>
						<div className="navMenuContainer">
								<ul>
										<li>
												<Link className="nav-link" to="/home">
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
