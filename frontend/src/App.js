import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Header from './components/Header.js';
import './reset.css';
import './App.css';

import SongContainer from './containers/songContainers/SongContainer.js';
import SongFormContainer from './containers/songContainers/SongFormContainer.js';
import SingleSongContainer from './containers/songContainers/SingleSongContainer.js';
import SongEditFormContainer from './containers/songContainers/SongEditFormContainer.js';

import TaskEditFormContainer from './containers/taskContainers/TaskEditFormContainer.js';
import TaskContainer from './containers/taskContainers/TaskContainer.js';
import Task from './components/taskComponents/Task.js';
import SingleTaskContainer from './containers/taskContainers/SingleTaskContainer.js'
import TaskFormContainer from './containers/taskContainers/TaskFormContainer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header/>
          <NavBar />
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/songs" component = {SongContainer} />
          <Route exact path = "/songs/newSong/add" component = {SongFormContainer} />
          <Route exact path="/songs/:id" render = {(props) =>{
            const id = props.match.params.id;

            return <SingleSongContainer id = {id} />
          }}
        />
        <Route exact path="/songs/song/edit/:id" render = {(props) =>{
  const id = props.match.params.id;
  return <SongEditFormContainer id = {id} />
  }}
/>
          <Route exact path = "/tasks" component = {TaskContainer} />
          <Route exact path = "/tasks/newTask/add" component = {TaskFormContainer} />
          <Route exact path="/tasks/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SingleTaskContainer id = {id} />
          }}
        />
        <Route exact path="/tasks/task/edit/:id" render = {(props) =>{
  const id = props.match.params.id;
  return <TaskEditFormContainer id = {id} />
  }}
/>

        </Fragment>
      </Router>
        );
  }
}

export default App;
