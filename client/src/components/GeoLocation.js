import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { observer, inject } from 'mobx-react';
import store from '../store/DataStore';


const GeoLocation = inject('store')(observer(class GeoLocation extends Component {

    constructor(props) {
        super(props)
        this.state={
            startLat: '',
            startLon: '',
            endLat: '',
            endLon: ''
        }
        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        const self = this;
        let startPos;
        navigator.geolocation.getCurrentPosition((position) => {
            let startPos = position;
            self.setState({
              startLat: Number((startPos.coords.latitude).toFixed(3)),
              startLon: Number((startPos.coords.longitude).toFixed(3)),
            }, (error) => {
              alert('Error occurred. Error code: ' + error.code);
            })
        });
        store.location.map((lat) => {console.log(lat.startLat)})
    }

    trackPosition() {
        const self = this;
        navigator.geolocation.watchPosition((position) => {
            self.setState({
                endLat: Number((position.coords.latitude).toFixed(3)),
                endLon: Number((position.coords.longitude).toFixed(3)),
            })
        })
    }

    showDistance() {
        Number.prototype.toRad = () => { return this * Math.PI / 180 }
        let R = 6371;
        const dLat = (this.state.endLat - this.state.startLat).toRad();
        const dLon = (this.state.endLon - this.state.startLon).toRad();
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(this.state.startLat.toRad()) * Math.sin(this.state.endLat.toRad()) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c;
        return d;
    }

    render() {
        const position = [this.state.startLat, this.state.startLon]
        return (
            <div className="box">
                <h3>Start latitude: <span>{store.location.startLat}</span></h3>
                <h3>Start longitude: <span>{this.state.startLon}</span></h3>
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
