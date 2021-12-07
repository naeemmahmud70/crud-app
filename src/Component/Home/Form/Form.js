import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, updateTodo, setUpdateTodo }) => {

    const updateTodos = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setUpdateTodo("")
    }

    useEffect(() => {
        if (updateTodo) {
            setInput(updateTodo.title);
        }
        else {
            setInput("")
        }
    }, [setInput, updateTodo])

    const onInputChange = event => {
        setInput(event.target.value)
    }

    const onFormSubmit = event => {
        event.preventDefault();
        if (!updateTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput("");
        }
        else {
            updateTodos(input, updateTodo.id, updateTodo.completed)
        }

    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Enter name"
                className="task-input"
                value={input}
                onChange={onInputChange}
                required
            />
            <button className="button-add" type="submit">
                {updateTodo? "Update" : "Add"}
            </button>
        </form>
    );
};

export default Form;