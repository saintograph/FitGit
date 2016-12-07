import { autorun, extendObservable, action, computed } from 'mobx';
import localforage from 'localforage';
import moment from 'moment';
import axios from 'axios';

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
            location: {
                startLat: navigator.geolocation.getCurrentPosition((position) => {return position.coords.latitude}),
                endLon: navigator.geolocation.getCurrentPosition((position) => {
                    return Number((position.coords.longitude).toFixed(3))
                })
            }
        });
        this.onLoad = action(function onLoad() {
            axios.get('http://localhost:4000/api/v1/workouts.json')
                .then((response) => {
                    this.workouts.replace(response.data)
                    const data = this.workouts.toJSON()
                    localforage.clear();
                    data.forEach((el) => {
                        console.log(el.id.toString())
                        localforage.setItem(el.id, el);
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
                            this.workouts.push(value)
                        }
                    )
                })
        });
        this.startWorkout = action(function startWorkout() {
            this.startTime = Date.now();
            this.duration = 0;
        })
        this.endWorkout = action(function endWorkout() {
            this.endTime = Date.now();
        })
        // this.test = action(function test() { 
        //     if (navigator.geolocation) {
        //       console.log('Geolocation is supported!');
        //     }
        //     else {
        //       console.log('Geolocation is not supported for this Browser/OS version yet.');
        //     }
        // })
    }
}

const store = (new WorkoutStore());
export default store;

