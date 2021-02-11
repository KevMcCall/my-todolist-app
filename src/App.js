import "./Styles/todolist.css";
// To Call Components To Page //
import React, { Component } from "react";
import Header from "./Components/Header";
import Submit from "./Components/Submit";
import TodoList from "./Components/Todo";
import PageHeader from "./Components/PageHeader";

// CTRL Space, Press Enter After Typing //


class App extends Component {



  state = {
    tasks: [" Bench Press: 3 Set * 6-8 Reps ",  " Pull-Ups: 3 Set * 6-8 Reps ", " Seated Cable Row: 3 Set * 8-10 Reps "],
  };

  // Handles Submit Button //
  // The function copies the content of the //
  // old task array and adds a new task as well //
  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  //the delete button //removes an element form the tasks array
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  render() {
    return (
      
      <div className="wrapper">
        <PageHeader />
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <Submit onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;


{/*  */}