import { configureStore } from '@reduxjs/toolkit';
import { incrementLikeButton } from './actions';
import { reducer } from './reducer';
import { likesSelector } from './selectors';


const store = configureStore({
  reducer: reducer
});


store.subscribe(() => {
  console.log('Component Likes receive from store :')
  console.log('Count', likesSelector(store.getState()))
})

store.dispatch(incrementLikeButton());
store.dispatch(incrementLikeButton(10));
store.dispatch(incrementLikeButton());
