import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from './displays/Main';
import NewWorkout from './displays/NewWorkout';
import WorkoutDetail from './displays/WorkoutDetail';
import store from './store/DataStore';
import { Provider } from 'mobx-react';
import Test from './test'

injectTapEventPlugin();

const stores = store;

// console.log(store.workouts + " + app.js");

// ReactDOM.render(
//   <Provider store={store}>
//       <Router history={browserHistory}>
//         <Route path="/" component={App}>
//           <IndexRoute component={Main}/>
//           <Route path="new" component={NewWorkout} />
//           <Route path="/workout/:workoutId" component={WorkoutDetail} />
//         </Route>
//       </Router>
//   </Provider>,
//   document.getElementById('root')
// );

// ReactDOM.render(<Test store={store}/>, document.getElementById('root'))

ReactDOM.render(
    <Provider store={stores}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Test}/>
          <Route path="new" component={NewWorkout} />
          <Route path="/workout/:workoutId" component={WorkoutDetail} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root')
);


ReactDOM.render(
    <Provider store={stores}>
        <Test />
    </Provider>,
  document.getElementById('root')
);
