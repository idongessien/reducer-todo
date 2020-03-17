import React, { useState } from 'react';

const TodoForm = (props) => {

    const [todo, setTodo] = useState('');

    const { clearCompleted } = props;

    const submitTodo = (e, action) => {
        e.preventDefault();
        props.dispatch(action);
        setTodo("");
    }

    const handleChange = (event) => {
        const newTodo = event.target.value;
        setTodo(newTodo); 
    }

    const clearAll = (e, action) => {
        e.preventDefault();
        props.dispatch(action);
    }

    return (
        <div>
            <form onSubmit={(event) => submitTodo(event, {type: 'NEW_TODO', payload: {item: todo, completed: false, id: Date.now()}})}>
                <input type="text" name="todo" placeholder={'Add Task Here'} value={todo} className="form-field" onChange={handleChange} />
                <button className="form-field">Add Task</button>
                <button className="form-field" onClick={(event) => clearAll(event, {type: 'CLEAR_ALL', payload: []})}>Clear All</button>
                <button className="form-field" onClick={clearCompleted}>Clear Completed Tasks</button>
            </form>
        </div>
    );
}

export default TodoForm;