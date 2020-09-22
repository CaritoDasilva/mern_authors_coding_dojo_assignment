import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './views/Home';
import AddAuthor from './views/AddAuthor';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <AddAuthor path="/new" />
        <Edit path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
