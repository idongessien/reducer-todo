import React from "react";
import Todo from "./Todo";

const toDoList = (props) => {

    const { state } = props; 
    return (
        <div>
            {
                state.map((todo, id) => {
                    return <Todo key={ id } todo={ todo } />
                })
            }
        </div>
    );
}

export default toDoList;