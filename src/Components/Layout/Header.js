import React from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () =>
  <header classname="header" data-testid="header" style={headerStyle}>
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Todoist" />
      </div>
      <div className="settings">
        <ul>
          <li>+</li>
          <li><FaPizzaSlice/></li>
        </ul>
      </div>
    </nav>
    <h1>TodoList</h1>
    <Link style={linkStyle} to="/" >Home</Link> | <Link style={linkStyle} to="/about" >About</Link>
  </header>

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign : 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

