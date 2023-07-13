import { GlobalState } from './reducer';

export function likesSelector(state: GlobalState) {
  return state.count;
}
