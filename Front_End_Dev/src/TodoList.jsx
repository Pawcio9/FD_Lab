import React from 'react';

const TodoList = ({ tasks, removeTask }) => {
    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {task}
                    <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;