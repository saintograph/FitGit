import React, {Component} from 'react';
import NavBar from '../common/NavBar';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Card } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import StopWatch from '../components/StopWatch';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
	listItem: {
		backgroundColor: 'white',
		textAlign: 'left'
	}
};

const {listItem} = styles;


class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
            completed: 25,
            value: 1,
            distance: 5
        };
	}
	
	componentDidMount() {
		if (navigator.geolocation) {
		console.log('Geolocation is supported!');
		}
		else {
		console.log('Geolocation is not supported for this Browser/OS version yet.');
		}
	}

    handleChange (event, index, value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <NavBar />
				<div className="row center-xs">
					<div className="col-xs-10">
						<div className="box">
							<Card style={{borderRadius: 10, minWidth: '75%'}}>
								<div className="box">
                                <h2 style={{padding: 20}}>WORKOUT STATS</h2>
                                <h1>Total time : <StopWatch/></h1>
                                Daily distance travelled : 2050 m
                                <LinearProgress mode="determinate" value={this.state.completed} color="#C12574" />
                                Your goal :
                                <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                                    <MenuItem value={1} primaryText="5 km" />
                                    <MenuItem value={2} primaryText="10 km" />
                                    <MenuItem value={3} primaryText="25 km" />
                                    <MenuItem value={4} primaryText="42 km" />
                                    <MenuItem value={5} primaryText="50 km" />
                                </DropDownMenu>
                                </div>
							</Card>
							<Card style={{borderRadius: 10, minWidth: '75%'}}>
							<div className="box">
								<List>
								<Subheader style={{fontSize: 16, fontWeight: 700}}>WORKOUT LOG</Subheader>
									<ListItem
										primaryText="12th December 2016"
										secondaryText="2.3 km"
										leftAvatar={<Avatar src="http://placehold.it/128x128" />}
										style={listItem}
										disabled
									/>
									<ListItem
										primaryText="Your workout 02"
										secondaryText="2.3 km"
										leftAvatar={<Avatar src="http://placehold.it/128x128" />}
										style={listItem}
										disabled
									/>
									<ListItem
										primaryText="Your workout 03"
										secondaryText="2.3 km"
										leftAvatar={<Avatar src="http://placehold.it/128x128" />}
										style={listItem}
										disabled
									/>
									<ListItem
										primaryText="Your workout 04"
										secondaryText="2.3 km"
										leftAvatar={<Avatar src="http://placehold.it/128x128" />}
										style={listItem}
										disabled
									/>
									<ListItem
										primaryText="Your workout 05"
										secondaryText="2.3 km"
										leftAvatar={<Avatar src="http://placehold.it/128x128" />}
										style={listItem}
										disabled
									/>
								</List>
							</div>
							</Card>
							<div className="box">
								<RaisedButton label="New Workout" secondary />
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export default Main;
