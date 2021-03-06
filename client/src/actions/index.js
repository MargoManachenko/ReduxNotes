import * as types from '../constants/ActionTypes';

let nextTodoId = 0;

export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export function deleteTodo(id){
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function toggleTodo(id) {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}