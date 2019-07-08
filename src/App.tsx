import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router'
import {ConnectedRouter} from 'connected-react-router'
import {History} from 'history'
import Sample from './containers/sample/Sample';
import Header from './containers/Header';
import HeaderSpace from './components/HeaderSpace';

interface AppProps {
  history: History;
}

const App = ({history}: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Header/>
        <HeaderSpace/>
        <Switch>
          <Route exact path='/' component={Sample}/>
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default App;
