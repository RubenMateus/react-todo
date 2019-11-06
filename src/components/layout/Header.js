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
          <li data-testid="quick-add-task-action" className="settings__add">
            +
          </li>
          <li data-testid="dark-mode-action" className="settings__darkmode">
            <FaPizzaSlice />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
