import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';
import 'framework7/css/framework7.bundle.css';
Framework7.use(Framework7React);

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
