/** @format */

//this containers jpb will beto hold 5 weather cards each representing a
//day of the week

import React from "react";
import apiConfig from "./apiKeys";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";
// import "bootstrap/dist/css/bootstrap.min.css";

class WeekContainer extends React.Component {
	state = {
		fullData: [],
        dailyData: [],
        degreeType: "farenheit"
    };
    
    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

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
            <div className="container">
            <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
            <h5 className="display-5 text-muted">New York, US</h5>
              <div className="row justify-content-center">
      
                {this.formatDayCards()}
      
              </div>
            </div>
		);
	}
}

export default WeekContainer;
