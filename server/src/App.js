import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./container/Home";

class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
        		<Route exact path="/order" component={Home} />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;
