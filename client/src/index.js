import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from './displays/Main';
import NewWorkout from './displays/NewWorkout';
import WorkoutDetail from './displays/WorkoutDetail';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="new" component={NewWorkout} />
      <Route path="/workout/:workoutId" component={WorkoutDetail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
