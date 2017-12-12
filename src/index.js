import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppPath from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppPath />, document.getElementById('root'));
registerServiceWorker();
