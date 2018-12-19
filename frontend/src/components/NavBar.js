  import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul id="menu">
    <li>
      <Link to="/" className="menu-Item">Home</Link>
    </li>
    <li>
      <Link to="/songs" className="menu-Item">Songs</Link>
    </li>
    <li>
      <Link to="/songs/newSong/add" className="menu-Item">Add Song</Link>
    </li>
    <li>
      <Link to="/tasks" className="menu-Item">Tasks</Link>
    </li>
    <li>
      <Link to="/tasks/newTask/add" className="menu-Item">Add Task</Link>
    </li>
  </ul>
);

export default Navbar;
