import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as V from 'victory';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
