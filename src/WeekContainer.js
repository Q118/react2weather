/** @format */

//this containers jpb will beto hold 5 weather cards each representing a
//day of the week

import React from "react";
import apiConfig from "./apiKeys";
import DayCard from "./DayCard";
import "bootstrap/dist/css/bootstrap.min.css";

class WeekContainer extends React.Component {
	state = {
		fullData: [],
		dailyData: [],
	};

	componentDidMount = () => {
		const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`;

		fetch(weatherURL)
			.then((res) => res.json())
			.then((data) => {
				const dailyData = data.list.filter((reading) =>
					reading.dt_txt.includes("18:00:00")
				);
				this.setState(
					{
						fullData: data.list,
						dailyData: dailyData,
					},
					() => console.log(this.state)
				);
			});
	};

	formatDayCards = () => {
		return this.state.dailyData.map((reading, index) => (
			<DayCard reading={reading} key={index} />
		));
	};

	render() {
		return (
			<div>
				{this.formatDayCards()}
			</div>
		);
	}
}

export default WeekContainer;
