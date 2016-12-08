import { autorun, extendObservable, action, computed } from 'mobx';
import localforage from 'localforage';
import getItems from 'localforage-getitems';
import startsWith from 'localforage-startswith';
import moment from 'moment';
import axios from 'axios';
import uuidV1 from 'node-uuid';
import _ from 'lodash';

export class WorkoutStore {
    constructor() {
        extendObservable(this, {
            start: Date.now(),
            end: Date.now(),
            workouts: [],
            startTime: '',
            endTime: '',
            displayedDuration: computed(() => {
                    const valueA = moment(this.startTime);
                    const valueB = moment(this.endTime);
                    const valueC = valueB.diff(valueA, 'seconds');
                    const valueD = valueB.diff(valueA, 'minutes');
                    const minutes = Math.floor(valueC / 60)
                    const seconds = Math.floor(valueC % 3600 % 60)
                return String(minutes + ' minutes ' + seconds + ' seconds');
            }),
            storedDuration: computed(() => {
                    const valueA = moment(this.startTime);
                    const valueB = moment(this.endTime);
                    const valueC = valueB.diff(valueA, 'seconds');
                    const valueD = valueB.diff(valueA, 'minutes');
                return valueC
            }),
            startLat: '',
            startLon: '',
            totalDuration: '',
            lastWorkout: '',
            duration: computed(() => { 
                const valueA = moment(this.startTime);
                const valueB = moment(this.endTime);
                return  valueB.diff(valueA, 'seconds');
            })
        });
        this.update = action(function update() {
            axios.get('http://localhost:4000/api/v1/workouts.json')
                .then((response) => {
                    this.workouts.replace(response.data)
                    const data = this.workouts.toJSON()
                    localforage.clear();
                    data.forEach((value) => {
                        console.log(value)
                        localforage.setItem(value.id, value);
                    })          
                })
        })
        this.onLoad = action(function onLoad() {
            axios.get('http://localhost:4000/api/v1/workouts.json')
                .then((response) => {
                    this.workouts.replace(response.data)
                    const data = this.workouts.toJSON()
                    localforage.clear()
                    data.forEach((value) => {
                        console.log(value)
                        localforage.setItem(value.id, value);
                    })          
                })
                .catch((error) => {
                    // Don't delete!
                    // localforage.length().then((length) => {
                    //     for(let i = 1; i < (length + 1); i++) {
                    //         localforage.getItem(i)
                    //         .then((value) => { this.workouts.push(value) })
                    //     }
                    // })
                    localforage.iterate(
                        (value, key, iterationNumber) => {
                            if (value.offline == true) {
                                this.workouts.unshift(value)
                            } else {
                                this.workouts.push(value)
                            }
                        }
                    )
                    // Working offline -> online database sync!
                    // localforage.getItems().then((value) => { 
                    //     var test = _.filter(value, ['offline', true])
                    //     console.log(test[0])
                    //     _.forEach(test, (result) => {
                    //         console.log(result.created_at)
                    //     })
                    // })
                })

        });
        this.startWorkout = action(function startWorkout() {
            this.startTime = Date.now();
            this.duration = 0;
        })
        this.endWorkout = action(function endWorkout() {
            this.endTime = Date.now();
            axios({
                method: 'post',
                url: 'http://localhost:4000/api/v1/workouts',
                data: {
                    workout: {
                        duration: this.duration,
                        latitude: this.startLat,
                        longitude: this.startLon,
                    }
                }
            })
            .catch((error) => {
                const value = {
                    offline: true,
                    uuid: uuidV1(),
                    duration: this.duration,
                    latitude: this.startLat,
                    longitude: this.startLon,
                }
                localforage.setItem(value.uuid, value);
            })
        })
        this.getStartingPosition = action(function getStartingPosition() {
            var self;
            navigator.geolocation.getCurrentPosition((position) => {
                const self = this;
                self.startLat = Number(position.coords.latitude).toFixed(3);
                self.startLon = Number(position.coords.longitude).toFixed(3);
            })
        })
        this.saveData = action(function saveData() {

        })
    }
}

const store = (new WorkoutStore());
export default store;

