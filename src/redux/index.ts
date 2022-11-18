import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootEffect from './middlewares';
import userInfoReducer from './reducers/userinfo';
function createStore() {
    const rootReducer = combineReducers({
        // problem: probblemReducer
        userInfo: userInfoReducer
    });
    return configureStore(rootReducer, rootEffect);
}

const store = createStore();

export default store;