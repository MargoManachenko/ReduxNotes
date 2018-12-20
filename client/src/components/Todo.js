import React from 'react';
import delicon from '../public/delicon.png';

const Todo = ({onClickNote, onDeleteNote, completed, text}) => (
    <div className="note">

        <div

            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </div>
        <div className="controls">
            <input type="checkbox" className="checkbox"  onClick={onClickNote}/>
            <img className="delete-icon" src={delicon} alt="" onClick={onDeleteNote}/>
        </div>

    </div>
);

export default Todo;