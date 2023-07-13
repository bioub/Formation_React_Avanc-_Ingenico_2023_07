import { LIKES_INCREMENT } from './constants';

export type GlobalState = {
  count: number;
}

type ActionFSA<T = any> = {
  type: string;
  payload?: T
}

export function reducer(state: GlobalState = { count: 0 }, action: ActionFSA) {
  switch (action.type) {
    case LIKES_INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
}
