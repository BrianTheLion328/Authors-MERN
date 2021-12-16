import React, {useState} from 'react'
import './App.css';
import Main from './views/Main';
import { Router } from "@reach/router";
import Form from './components/Form'
import Update from './views/Update'


function App(props) {
  const [authors, setAuthors] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to the Authors website!</h1>
      <Router >
        <Main authors={authors} setAuthors={setAuthors} path="/" />
        <Form authors={authors} setAuthors={setAuthors} initialName="" path="/new" />
        <Update path="authors/:id/edit" />
      </Router >
    </div>
  );
}

export default App;
