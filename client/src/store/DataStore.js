import { autorun, extendObservable, action } from 'mobx';
import axios from 'axios'

export class WorkoutStore {
    constructor() {
        extendObservable(this, {
            start: Date.now(),
            workouts: "list of workouts",
            test: "it's working!"
        });
        action(function doThis() {
            console.log(this.test)
        })
    }
}

const store = (new WorkoutStore());
export default store;

autorun(() => {
    console.log(store.workouts);
    console.log(store.start);
    console.log(this.test)
})

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