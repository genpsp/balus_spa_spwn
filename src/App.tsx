import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router'
import {ConnectedRouter} from 'connected-react-router'
import {History} from 'history'
import Sample from './pages/sample/Sample';

interface AppProps {
  history: History;
}

const App = ({history}: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Sample}/>
        </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ConnectedRouter>
  );
}

export default App;
