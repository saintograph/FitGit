import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ReactInterval from 'react-interval';
import moment from 'moment';
import GeoLocation from '../components/GeoLocation'
import { observer, inject, computed } from 'mobx-react';
import axios from 'axios'
import store from '../store/DataStore';

const NewWorkout = inject('store')(observer(class NewWorkout extends Component {
    constructor(props) {
        super(props)
        this.state={
            workoutState: false,
            enabled: false,
            timeout: 1000,
            count: 0,
            displayDuration: false
        }
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
    }

    startWorkout() {
        const self = this;
        this.setState({
            enabled: true, 
            workoutState: true,
            displayDuration: false
        })
        store.startWorkout();
    }

    endWorkout() {
        const self = this;
        this.setState({
            enabled: false, 
            workoutState: false, 
            count: 0,
            displayDuration: true
        })
        store.endWorkout();   
    }

    render() {
        return (
            <div>
                <div className="row center-xs">
                    <div className="box">
                        {this.state.workoutState ? 
                            <div className="box">
                                <RaisedButton label="End Workout" secondary onClick={this.endWorkout.bind(this)} /> 
                            </div>
                            :
                            <div className="box"> 
                                <RaisedButton label="Start Workout" secondary onClick={this.startWorkout.bind(this)} />
                            </div>
                        }
                        <h3>Total time: {this.state.count} seconds</h3>
                        <h4>Workout duration: {this.state.displayDuration ? store.displayedDuration : <i style={{fontSize: 9}}>please begin your workout</i> }</h4>
                        <div className="box">
                        <ReactInterval  timeout={this.state.timeout} enabled={this.state.enabled}
                          callback={() => this.setState({count: this.state.count + 1})} />
                        </div>
                        <GeoLocation />
                    </div>
                </div>
            </div>
        );
    }
}))

export default NewWorkout;
