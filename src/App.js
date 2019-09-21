import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
// import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take Out The Trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner With Wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting With Boss',
        completed: false
      }
    ]
  }

  // state = {
  //   todos: []
  // }
  
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({ todos: res.data }));
  // }

  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }) })
  }

  delTodo = (id) => {
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {

    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title,
    //   completed: false
    // }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))

    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo } />
                <Todos todos={this.state.todos} markComplete={ this.markComplete } delTodo={ this.delTodo } />
              </React.Fragment>
            ) } />

            <Route exact path="/about" component={ About } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
