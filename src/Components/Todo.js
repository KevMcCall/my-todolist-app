import React from 'react'

const TodoList = (props) => {
    //Have access to all the todos we will pass. Pass the tasks as a prop //
    const todos = props.tasks.map((todo, index) => {
        //Whenever we use .map we use a unique key, Index as a parameter //
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })

    return (
        <div className= "list-wrapper">
        {todos}
        </div>
    );
}

//Dislaying the content of the task string //
const Todo = (props) => {
    return(
        <div className= 'list-item'>
            <button class='delete' onClick= {() => {props.onDelete(props.id)}}> ❎ </button>
            {props.content}
            
        </div>
    )
}



export default TodoList
