
import { combineReducers } from 'redux';
import ACTIONS from "./actions";

const launchFilterReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.Types.SET_LAUNCH_FILTER: {
            return { ...state, ...action.payload };
        }

        default:
            return state;
    }
};

const launchDataReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.Types.SET_LAUNCH_DATA: {
            return action.payload;
        }

        default:
            return state;
    }
};

export default combineReducers({
    filter: launchFilterReducer,
    data: launchDataReducer,
});
