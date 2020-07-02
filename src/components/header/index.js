import React from 'react';
import { Link, NavLink } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header>
      <nav>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <NavLink to="/history" activeClassName="here">History</NavLink>
              </li>
          </ul>
      </nav>
  </header>
    );
  }
}

export default Header;
