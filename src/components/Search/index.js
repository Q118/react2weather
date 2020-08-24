/** @format */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";

function Search() {

	function getCityInfo() {
		API.getCity(city).then((res) => {
			//console.log(res);
			// setFacts(res.data);
		  });
	}
	const [city, setCity] = useState("");

	const handleClick = (event) => {
		event.preventDefault();
		// getCityInfo(event.target.value);
		console.log({city});
		API.getCity(event.target.value);
	};

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
							onChange={event => setCity(event.target.value)}
						/>
						<Button 
							type= "submit"
							id="searchbutton"
							onClick={handleClick}
						>👀
						</Button>
						{city}
					</form>
				</div>
				<div id="button-container" className="col-sm" />
			</div>
		</div>
	);
}

export default Search;
