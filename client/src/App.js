import React, { Component } from 'react';
import Main from './displays/Main';
import NewWorkout from './displays/NewWorkout';
import WorkoutDetail from './displays/WorkoutDetail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './common/NavBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { observer } from 'mobx-react'
import store from './store/DataStore';

const App = observer(class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.setState = this.setState.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillMount() {
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
						style={{textAlign: "center"}}
						containerClassName="drawer"
						containerStyle={{backgroundColor: "#FF4081"}}
					>
						<div className="box">
							<Link to="/" onClick={this.handleClose}>Home</Link><br/>
						</div>
						<div className="box">
							<Link to="new" onClick={this.handleClose}>New Workout</Link>
						</div>
					</Drawer>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
})

export default App;
