  import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul id="menu">
    <li>
      <Link to="/" className="menu-item">Home</Link>
    </li>
    <li>
      <Link to="/songs" className="menu-item">Songs</Link>
    </li>
    <li>
      <Link to="/songs/newSong/add" className="menu-item">Add Song</Link>
    </li>
    <li>
      <Link to="/tasks" className="menu-item">Tasks</Link>
    </li>
    <li>
      <Link to="/tasks/newTask/add" className="menu-item">Add Task</Link>
    </li>
  </ul>
);

export default Navbar;
