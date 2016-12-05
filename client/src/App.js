import React, { Component } from 'react';
import Main from './displays/Main';
import NewWorkout from './displays/NewWorkout';
import WorkoutDetail from './displays/WorkoutDetail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './common/NavBar'

class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
				<NavBar />
				{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;

