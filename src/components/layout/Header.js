import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => (
  <header className="header" data-testid="header" style={headerStyle}>
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Todoist" />
      </div>
      <div className="settings">
        <ul>
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </ul>
      </div>
    </nav>
    <h1>TodoList</h1>
  </header>
);
