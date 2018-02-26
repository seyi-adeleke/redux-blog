import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers/indexReducer';

const env = process.env.NODE_ENV || 'development';

let store;
if (env === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  store = createStoreWithMiddleware(reducers, composeEnhancers);
} else {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  store = createStoreWithMiddleware(reducers);
}
export default store;
