import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import promise from 'redux-promise';

import reducers from './reducers';
import LaunchList from './components/launch_list';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={LaunchList} />
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
