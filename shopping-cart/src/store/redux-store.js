import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

// Create redux store
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger), // Include your middleware here
));

export default store;