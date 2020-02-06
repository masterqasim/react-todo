import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './components/store/reducers/rootReducer'
import thunk from 'redux-thunk'

// import todoReducer from './components/store/reducers/todoReducer'

const store=createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
