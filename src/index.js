import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { setSearchField, requestFriends } from './reducer'
import './index.css';
import App from './container/App';
import 'tachyons'
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({setSearchField, requestFriends})

const store = createStore(rootReducer, applyMiddleware(thunk))



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
