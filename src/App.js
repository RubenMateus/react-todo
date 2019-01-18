import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './Components/Todos'
import './App.css';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos : []
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
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

  addTodo = (title) =>{
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        console.log(res); 
        this.setState({todos: res.data});
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
