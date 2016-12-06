import { autorun, extendObservable, action } from 'mobx';
import Immutable from 'immutable';
import axios from 'axios';

export class WorkoutStore {
    constructor() {
        extendObservable(this, {
            start: Date.now(),
            workouts: [],
            test: 'its working!'

        });
        this.onLoad = action(function onLoad() {
            axios.get('http://localhost:4000/api/v1/workouts.json')
            .then((response) => {
                console.log(response);
                this.workouts.replace(response.data)
                // this.workouts = this.workouts.toJSON()
                console.log(this.workouts.map(workout => workout.notes))
            });
        });
        this.doThis = action(function doThis() {
            this.test = 'hello';
        });
    }
}

const store = (new WorkoutStore());
export default store;

autorun(() => {
    // const test = store.workouts.toJSON;
    // console.log(test);
    // console.log(store.workouts)
});

// class viewWorkouts {
//     constructor() {
//         extendObservable(this, {

//         })
//         this.getWorkouts = action(() => {
//             console.log("it's alive!")
//         })
//     }
// }

// const actionHero = (new viewWorkouts());
// export default actionHero;
// console.log(store.workouts);
// console.log(store.start);
// console.log(store.test);