import React from "react";
import "../Styles/todolist.css";


function Header(props) {
  return (
    <div className="class-header">
      <h1 className="class-header-title">
        You have {props.numTodos} Exercises to Complete.
      </h1>
    </div>
  );
}

 
export default Header



// RFCE //