import {SET_VISIBILITY_FILTER} from "../constants/ActionTypes";
import {VisibilityFilters} from "../constants/Filters";

const {SHOW_ALL} = VisibilityFilters;

function VisibilityFIlter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

export default VisibilityFIlter;