import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    // console.log(isUserLoggedIn);

    return (
      <header>
        <nev className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a
              href='https://www.linkedin.com/in/mdfarukulislam/'
              className='navbar-brand'
            >
              My@Site
            </a>
          </div>
          <ul className='navbar-nav'>
            {isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/welcome/myusername'>
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/todos'>
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>
            {!isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/Login'>
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className='nav-link'
                  to='/Logout'
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nev>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
