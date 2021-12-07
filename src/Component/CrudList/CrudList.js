import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const CrudList = ({ todos, setTodos, setUpdateTodos }) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    };

    const handleUpdate = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setUpdateTodos(findTodo)
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item">
                    <input type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <FontAwesomeIcon className="text-color" icon={faCheckCircle} />
                        </button>
                        <button className="button-edit task-button" onClick={() => handleUpdate(todo)}>
                            <FontAwesomeIcon className="text-color" icon={faEdit} />
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <FontAwesomeIcon className="text-color" icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default CrudList;