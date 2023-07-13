import { createReducer } from '@reduxjs/toolkit';
import { incrementLikeButton } from './actions';

export type GlobalState = {
  count: number;
}

const initialState = { count: 0 };

/*
export function reducer(state: GlobalState = { count: 0 }, action: ActionFSA) {
  switch (action.type) {
    case incrementLikeButton.type:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
}
*/

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementLikeButton, (state, action) => {
    state.count += action.payload; // Redux Toolkit converti ce code en version immuable
  })
})
