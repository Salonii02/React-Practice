import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const dressLinks = this.props.dresses.map(d => (
      <li className='nav-item' key={d.name}>
        <NavLink exact to={`/dress/${d.name}`} className='nav-link'>
          {d.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/dress'>
          Dress App
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink exact to='/dress' className='nav-link'>
                Home
              </NavLink>
            </li>
            {dressLinks}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
