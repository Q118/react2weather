/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
	const links = [<BrandLink key="/" to="/" />];

	links.push(
		<NavLink key="signup" className="nav-item" to="/search">
			Search
		</NavLink>
	);
	links.push(
		<NavLink key="login" className="nav-item" to="/saved">
			Saved
		</NavLink>
	);
	return (
		<nav className="Navbar">
			{links}
		</nav>
	);
}

function BrandLink(props) {
	return (
		<NavLink className="nav-item brand" exact {...props} to="/">
			🌤⛈WEATHER DASHBOARD⛈🌤
		</NavLink>
	);
}

export default Navbar;
