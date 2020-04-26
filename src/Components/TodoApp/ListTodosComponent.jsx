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
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      //console.log(response);
      this.setState({ todos: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div classNaame='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Target date</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
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
