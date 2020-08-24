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

		// this.create = this.create.bind(this);
		// this.update = this.update.bind(this);
		// this.delete = this.delete.bind(this);
		// this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch(queryURL, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					temp: response.main.temp,
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
				name: this.state.name,
				description: this.state.weather.description,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
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
								Friend Name:
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
							<label htmlFor="notes">
								Friend notes:
								<input
									name="notes"
									id="notes"
									type="test"
									className="form-control"
									value={this.state.notes}
									onChange={(e) => this.handleChange({ notes: e.target.value })}
									required
								/>
							</label>
							<label htmlFor="id">
								Friend ID:
								<input
									name="id"
									id="id"
									type="text"
									className="form-control"
									value={this.state.id}
									onChange={(e) => this.handleChange({ id: e.target.value })}
								/>
							</label>
							<button
								className="btn btn-primary"
								type="button"
								onClick={(e) => this.create(e)}>
								Add
							</button>
							<button
								className="btn btn-info"
								type="button"
								onClick={(e) => this.update(e)}>
								Update
							</button>
							<button
								className="btn btn-danger"
								type="button"
								onClick={(e) => this.delete(e)}>
								Delete
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
