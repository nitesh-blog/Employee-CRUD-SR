import {createStore,applyMiddleware,combineReducers} from 'redux' 
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import employeeReducer from './Reducer';

// Combine multiple reducers if needed
const rootReducer = combineReducers({
    employee : employeeReducer,
});

//configure middleware
const middleware = [thunk];

//create the redux store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
