import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import reducers from './reducers';
import InfiniaStores from './reducers/infinia.js'
import App from './App';

require('../css/main.css');
// require('../css/bootstrap.css');

const store = createStore(
    InfiniaStores,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
   , document.getElementById('root'));
