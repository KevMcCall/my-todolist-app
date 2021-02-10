import './Styles/todolist.css'
// To Call Components To Page //
import React, { Component } from 'react';
import Header from './Components/Header';
import Submit from './Components/Submit';
import TodoList from './Components/Todo';

// CTRL Space, Press Enter After Typing //


class App extends Component {
  state = {
    tasks: ['Task 1 ', 'Task 2 ', 'Task 3 ']
  };

// Handles Submit Button //
  handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]});
}

  //the delete button //removes an element form the tasks array
  handleDelete = (index) => {
    const newArr= [...this.state.tasks];
    newArr.splice(index, 1); 
    this.setState({tasks: newArr}); 
  }

  render() {
    return(
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <Submit onFormSubmit={this.handleSubmit} />


        </div>
      </div>
    );
  } 
}

export default App




