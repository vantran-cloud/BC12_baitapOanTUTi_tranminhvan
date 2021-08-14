import { createStore, combineReducers } from 'redux';
import gameOanTuTiReducer from './reducers/gameOanTuTiReducer';

//root reducer
const rootReducer = combineReducers({
    gameOanTuTiReducer,
});

// khoi tao store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;