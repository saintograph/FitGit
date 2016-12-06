import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Card } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import StopWatch from '../components/StopWatch';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import store from '../store/DataStore';
import axios from 'axios';
import { observer, action, inject, extendObservable } from 'mobx-react';

const styles = {
	listItem: {
		textAlign: 'left',
		backgroundColor: 'white',
	}
};

const { listItem } = styles;

const meta = require('../data/workouts.json');


// const allesWorkouts = store.workouts.map((workout) => {
//     <div key={workout.id}>
//         <p>workout.notes</p>
//     </div>
// });

const Main = inject('store')(observer(class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: 25,
            value: 1,
            data: '',
            distance: 5,
            workouts: 'bla'
        };
        this.setState = this.setState.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        // console.log(store.workouts)
    }

    getData () {
        // this.setState({workouts: store.workouts})
        // console.log(store.workouts.toJSON)
    }

    handleChange (event, index, value) {
        this.setState({
            value
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <div className="row center-xs">
                    <div className="col-xs-10">
                        <div className="box">
                            <Card style={{borderRadius: 10, minWidth: '75%'}}>
                                <div className="box">
                                <h2 style={{padding: 20}}>WORKOUT STATS</h2>
                                {store.workouts.map(workout => <p key={workout.id}>{workout.distance}</p>)}
                                <h1>Total time : <StopWatch/></h1>
                                Daily distance travelled : {meta.workouts.notes}
                                <div className="box">
                                    <LinearProgress mode="determinate" value={this.state.completed} color="#C12574"/>
                                </div>
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
                                {/* {data.map((workout) => {
                                        return(
                                            <ListItem
                                                key={workout.id}
                                                primaryText={workout.created_at}
                                                secondaryText={workout.distance + ' km'}
                                                leftAvatar={<Avatar src="http://placehold.it/128x128" />}
                                                style={listItem}
                                            />
                                        );
                                })} */}
                                </List>
                            </div>
                            </Card>
                            <div className="box">
                            <RaisedButton label="New Workout" onClick={ () => { store.onLoad() } } secondary />
                            <RaisedButton label="New whatever" onClick={this.getData} secondary />
                                <Link to="new">
                                    <RaisedButton label="New Workout"secondary />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}));

export default Main;

