import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from "../constants/ActionTypes";
import {SET_VISIBILITY_FILTER} from "../constants/ActionTypes";
import {VisibilityFilters} from "../constants/Filters";
import {combineReducers} from 'redux';
import {deleteTodo} from "../actions/index";

const {SHOW_ALL} = VisibilityFilters;

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, id) => {
                if (id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        case DELETE_TODO:
            let index = state.findIndex(note => note.id === action.id);
            state.splice(index, 1);
            return [...state];
        default:
            return state;
    }
}


function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});


export default todoApp;