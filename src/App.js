/** @format */

import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Saved from "./pages/Saved";
// import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Cities from "./pages/Cities";

//hard coding city name for now
var city = "Tulsa";

var apiKey = "833100609a87c9e8f833ff46575821a1";
// city = this.textContent;
var queryURL =
	"https://api.openweathermap.org/data/2.5/forecast?q=" +
	city +
	"&units=imperial" +
	"&appid=" +
	apiKey;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			temp: "",
			description: "",
		};

		this.create = this.create.bind(this);
		// this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch(queryURL, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					temp: "",
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	create(e) {
		// add entity - POST
		e.preventDefault();
		// creates entity
		fetch(queryURL, {
			method: "POST",
			body: JSON.stringify({
				name: "",
				// description: this.state.weather.description,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res.city.name);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	handleChange(changeObject) {
		this.setState(changeObject);
	}

	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<h1 className="display-4 text-center">Make An API Call in React</h1>
						<form className="d-flex flex-column">
							<legend className="text-center">Add-Update-Delete Friend</legend>
							<label htmlFor="name">
								Search For City:
								<input
									name="name"
									id="name"
									type="text"
									className="form-control"
									value={this.state.name}
									onChange={(e) => this.handleChange({ name: e.target.value })}
									required
								/>
							</label>
							<button
								className="btn btn-primary"
								type="button"
								onClick={(e) => this.create(e)}>
								Search
							</button>
							</form>
							<Cities cities={this.state.cities} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
