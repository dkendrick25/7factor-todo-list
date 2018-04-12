import React, { Component } from 'react';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import './App.css';

class App extends Component {
  state = {
    taskText: '',
    items: [{task: 'hello'}]
  }
  
  updateInputTask = (e) => {
    this.setState({taskText: e.target.value})
  }
  
  handleAddTask = () => {
    this.setState({
      taskText: '',
      items: [...this.state.items, {task: this.state.taskText}]
    })
  }
  
  render() {
    return (
      <div>
        <ToDoInput 
          taskText={this.state.taskText}
          updateInputTask={this.updateInputTask} 
          handleAddTask={this.handleAddTask}/>
        <ToDoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
