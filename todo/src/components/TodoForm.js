import React, { useState } from 'react';

const TodoForm = (props) => {

    const [todo, setTodo] = useState('');

    const { clearCompleted } = props;

    const submitTodo = (event, action) => {
        event.preventDefault();
        props.dispatch(action);
        setTodo("");
    }

    const handleChange = (event) => {
        const newTodo = event.target.value;
        setTodo(newTodo); 
    }

    const clearAll = (event, action) => {
        event.preventDefault();
        props.dispatch(action);
    }

    return (
        <form className="form-cont" onSubmit={(event) => submitTodo(event, {type: 'NEW_TODO', payload: {item: todo, completed: false, id: Date.now()}})}>
            <input type="text" name="todo" placeholder={'Add Task Here'} value={todo} className="form-field" onChange={handleChange} />
            <div className="btn-cont">
                <button className="form-field form-btn">Add Task</button>
                <button className="form-field form-btn" onClick={(event) => clearAll(event, {type: 'CLEAR_ALL', payload: []})}>Clear All</button>
                <button className="form-field form-btn" onClick={clearCompleted}>Clear Completed Tasks</button>
            </div>
        </form>
    );
}

export default TodoForm;