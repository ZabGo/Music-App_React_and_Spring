import React, { Component, Fragment } from 'react';
import SongContainer from './containers/SongContainer.js';
import SongFormContainer from './containers/SongFormContainer.js';
import TaskContainer from './containers/TaskContainer.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Task from './components/Task.js';
import SingleSongContainer from './containers/SingleSongContainer.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SingleTaskContainer from './containers/SingleTaskContainer.js'
import TaskFormContainer from './containers/TaskFormContainer.js';
import SongEditFormContainer from './containers/SongEditFormContainer.js';
import TaskEditFormContainer from './containers/TaskEditFormContainer.js';
import Header from './components/Header.js';
import './reset.css';
import './App.css';

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
