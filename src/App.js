/** @format */

import React from "react";
//import css page
import "bootstrap/dist/css/bootstrap.min.css";
import WeekContainer from "./WeekContainer";

//hard coding city name for now


class App extends Component {
	render() {
	  return (
		<div className="App">
		  <WeekContainer />
		</div>
	  );
	}
  }

export default App;
