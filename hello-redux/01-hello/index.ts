import { legacy_createStore } from 'redux';

type GlobalState = {
  count: number;
}

// Flux Standard Action
type ActionFSA<T = any> = {
  type: string;
  payload?: T
}

// function pure
function reducer(state: GlobalState = { count: 0 }, action: ActionFSA) {
  console.log('reducer call', state, action);
  if (action.type === '@likes/increment') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
}

const store = legacy_createStore(reducer);

console.log(store.getState()); // initial state

store.subscribe(() => {
  console.log('dispatch done');
  console.log(store.getState()); // actual state
});

console.log('dispatch call');
store.dispatch({ type: '@likes/increment' });
console.log('dispatch call');
store.dispatch({ type: '@todos/add', payload: { text: 'Acheter du pain' } });
console.log('dispatch call');
store.dispatch({ type: '@todos/remove', payload: 1 });

// Pattern Observer
// store.dispatch({ type: 'addtodo' })
// document.dispatchEvent(new Event('click'));
// store.subscribe(() => {});
// document.addEventListener('click', () => {});
