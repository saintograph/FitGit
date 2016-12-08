import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import store from '../store/DataStore';
import axios from 'axios';
import { observer, action, inject, extendObservable } from 'mobx-react';
import moment from 'moment';
import localforage from 'localforage';
import _ from 'lodash';


const styles = {
	listItem: {
		textAlign: 'left',
		backgroundColor: 'white',
	}
};

const { listItem } = styles;

const meta = require('../data/workouts.json');

const Main = inject('store')(observer(class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workouts: store.workouts
        };
        this.setState = this.setState.bind(this);
    }

    componentWillMount() {
    }
    componentDidMount() {
        store.localStorageConfig
        store.onLoad(); 
    }

    componentWillUpdate() {
    }
    componentWillUnMount() {
    }

    formatDate(value) {
        return moment(value).format("MMMM Do YYYY").toString();
    }

    handleChange (event, index, value) {
        this.setState({
            value
        });
    }

    refreshUI() {
        store.onLoad();
    }

    getMinutesSeconds(value){
        const minutes = Math.floor(value / 60);
        const seconds = Math.floor(value % 3600 % 60);
        return String(minutes + ' minutes ' + seconds + ' seconds');
    }

    render() {
        const firstFiveEntries = _.take(store.workouts, 5);
        const duration = _.map(firstFiveEntries, 'duration');
        const duration2 = _.reduce(duration, (sum, n) => {return sum + n})
        const minutes = Math.floor(duration2 / 60)
        const seconds = Math.floor(duration2 % 3600 % 60)
        return (
            <div>
                <div className="row center-xs">
                    <div className="col-xs-10">
                        <div className="box">
                            <Card style={{borderRadius: 10, minWidth: '75%'}}>
                                <div className="box" style={{paddingBottom: 35}}>
                                    <h2 style={{padding: 20}}>WORKOUT STATS</h2>
                                    <h3>Total duration 5 previous workouts :<br/> {minutes} minutes {seconds == 0 ? null : seconds + " seconds"}</h3>
                                </div>
                            </Card>
                            <div className="box">
                                <Link to="new">
                                    <RaisedButton label="New Workout" secondary />
                                </Link>
                            </div>
                            <Card style={{borderRadius: 10, minWidth: '75%'}}>
                            <div className="box">
                                <List>
                                <Subheader style={{fontSize: 16, fontWeight: 700}}>WORKOUT LOG</Subheader>
                                {_.take(this.state.workouts, 5).map((workout) => {
                                        return(
                                                <ListItem
                                                    key={workout.id ? workout.id : workout.uuid}
                                                    primaryText={this.formatDate(workout.created_at)}
                                                    secondaryText={this.getMinutesSeconds(workout.duration)}
                                                    leftAvatar={<Avatar src="http://placehold.it/128x128" />}
                                                    style={listItem}
                                                >
                                                { workout.offline ? <span style={{height: 15, fontSize: 11}}>offline save</span>: <span></span>}
                                                </ListItem>
                                        );
                                })}
                                </List>
                            </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}));

export default Main;

