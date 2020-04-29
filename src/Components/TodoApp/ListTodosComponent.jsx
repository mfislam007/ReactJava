import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        //  { id: 1, description: 'task1', done: false, targetDate: new Date() },
        //  { id: 2, description: 'task2', done: false, targetDate: new Date() },
        //  { id: 3, description: 'task3', done: false, targetDate: new Date() },
      ],
      message: null,
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.refreshTodos();
    console.log(this.state);
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      //console.log(response);
      this.setState({ todos: response.data });
    });
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    //console.log(id, username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Delete of todo ${id} successful` });
      this.refrashTodos();
    });
  }

  updateTodoClicked(id) {
    console.log('update' + id);
    this.props.history.push(`/todos/${id}`);

    //   let username = AuthenticationService.getLoggedInUserName();
    //console.log(id, username);
    //TodoDataService.deleteTodo(username, id).then((response) => {
    //  this.setState({ message: `Delete of todo ${id} successful` });
    // this.refrashTodos();
    //});
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && (
          <div classname='alart alart-success'>{this.state.message}</div>
        )}
        <div classNaame='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Target date</th>
                <th>Completed</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListTodosComponent;
