import React from "react";

const ToDo = (props) => {

    const { todo, completed } = props

    const checkOff = (event, action) => {
        event.preventDefault();
        props.dispatch(action);
    }
   
    return (
        <div onClick={(event) => checkOff(event, {type: 'MARK_COMPLETE', payload: {...todo, completed: true}})}>
            <p style={completed ? { color: 'red' } : { color: 'black' }}>{todo.item}</p>
        </div>
    );
}

export default ToDo;