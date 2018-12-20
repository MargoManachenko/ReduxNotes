import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, onTodoClick, onTodoDelete}) => (
    <div className="notes-list">
        {todos.map((todo) =>
            <Todo
                key={todo.id}
                {...todo}
                onClickNote={() => onTodoClick(todo.id)}
                onDeleteNote={() => onTodoDelete(todo.id)}
            />
        )}
    </div>
);

export default TodoList;