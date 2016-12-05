import React, {Component} from 'react';
import NavBar from '../common/NavBar';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewWorkout extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="row center-xs">
                    <div className="box">
                        <RaisedButton label="End Workout" secondary /><br/>
                        <TextField
                          hintText="How did the workout go?"
                          floatingLabelText="Notes"
                        />
                        <h1>10:20:10</h1>
                            <div className="leaflet-container">
                                <Map center={[51.505, -0.09]} zoom={13}>
                                    <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                    />
                                    <Marker position={[51.505, -0.09]}>
                                    <Popup>
                                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                                    </Popup>
                                    </Marker>
                                </Map>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewWorkout;
