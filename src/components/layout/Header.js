import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => (
  <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Todo App" />
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
