import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import NavBar from '../common/NavBar';

class WorkoutDetail extends Component {
    render() {
        return (
            <div className="row center-xs">
                <NavBar />
                <div className="box">
                <Card style={{borderRadius: 10, minWidth: 250 }}>
                    <h1>Distance</h1>
                    <h2>Notes</h2>
                    <h3>Time</h3>
                </Card>
                </div>
            </div>
        );
    }
}

export default WorkoutDetail;
