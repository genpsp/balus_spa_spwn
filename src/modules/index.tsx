import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import sample, {sampleState} from './sample'

export type AppState = {
    sample: sampleState,
    router: RouterState,
};

const reducers = (history: History) => combineReducers<AppState>({
    router: connectRouter(history),
    sample
})

export default reducers
