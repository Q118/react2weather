/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
	return (
		<div className="container mb-3 pb-2">
			<div className="row" style={{ width: "18rem" }}>
				<div className="card-body col-sm">
					<form>
						<label htmlFor="input">Search for a city</label>
						<input
							type="text"
							id="city-input"
							placeholder="Anywhere in the 🌏"
						/>
						<button type="submit" id="search-button">
							👀
						</button>
					</form>
				</div>
				<div id="button-container" className="col-sm" />
			</div>
		</div>
	);
}

export default Nav;
