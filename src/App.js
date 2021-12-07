import React, { useEffect, useState } from 'react';
import './App.css';
import CrudList from './Component/CrudList/CrudList';
import Form from './Component/Home/Form/Form';
import Header from './Component/Home/Header/Header';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [updateTodo, setUpdateTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className="container">
      <div className="app-wrapper">
        <Header></Header>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
        >
        </Form>
        <CrudList todos={todos}
          setTodos={setTodos}
          setUpdateTodos={setUpdateTodo}
        ></CrudList>
      </div>
    </section >
  );
}

export default App;
