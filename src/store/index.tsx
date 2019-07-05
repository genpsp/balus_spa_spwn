import {createStore, applyMiddleware} from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import reducers from '../modules';

export const history = createBrowserHistory()

export type Store = ReturnType<typeof store.getState>

const store = createStore(
  reducers(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default store;