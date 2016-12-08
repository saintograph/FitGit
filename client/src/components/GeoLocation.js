import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { observer, inject } from 'mobx-react';
import store from '../store/DataStore';


const GeoLocation = inject('store')(observer(class GeoLocation extends Component {

    constructor(props) {
        super(props)
        this.setState = this.setState.bind(this);
        this.showDistance = this.showDistance.bind(this);
    }

    componentDidMount() {
        store.getStartingPosition()
    }

    showDistance() {
        console.log(store.startLat)
        console.log(store.startLon)
    }

    render() {
        const position = [store.startLat, store.startLon]
        return (
            <div className="box">
                <h3>Workout latitude: <span>{store.startLat}</span></h3>
                <h3>Workout longitude: <span>{store.startLon}</span></h3>
                <div className="leaflet-container">
                    <Map center={position} zoom={13}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={position}>
                            <Popup>
                                <span>Your starting location</span>
                            </Popup>
                        </Marker>
                    </Map>
                </div>
            </div>
        )
    }
}));

export default GeoLocation;
