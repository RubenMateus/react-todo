import React, { Component } from 'react';
import Todos from './Components/Todos'
import './App.css';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: 'Take the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Stuff',
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo/>
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
