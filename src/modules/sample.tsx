import actionCreatorFactory from 'typescript-fsa';
import {reducerWithInitialState} from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

export const sampleActions = {
  updateNum: actionCreator<void>('UPDATE_NUM'),
};

export interface sampleState {
  number: number;
}

const initialState: sampleState = {
  number: 0
};

const sampleReducer = reducerWithInitialState(initialState)
  .case(sampleActions.updateNum, state => {
    return {...state, number: ++state.number};
  });

export default sampleReducer