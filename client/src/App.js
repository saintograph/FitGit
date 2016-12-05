import React, { Component } from 'react';
import Main from './displays/Main';
import NewWorkout from './displays/NewWorkout';
import WorkoutDetail from './displays/WorkoutDetail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './common/NavBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.setState = this.setState.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggle() {
		this.setState({
			open: !this.state.open
		});
	}

	handleClose() {
		this.setState({
			open: false
		});
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavBar handleToggle={this.handleToggle.bind(this)}/>
					<Drawer
						open={this.state.open}
					>
						<Link to="/" onClick={this.handleClose}>Home</Link>
						<Link to="new" onClick={this.handleClose}>New Workout</Link>
					</Drawer>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;

