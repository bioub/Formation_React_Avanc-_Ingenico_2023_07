import { incrementLikeButton } from './actions';
import { store } from './configureStore';
import { likesSelector } from './selectors';


store.subscribe(() => {
  console.log('Component Likes receive from store :')
  console.log('Count', likesSelector(store.getState()))
})

store.dispatch(incrementLikeButton());
store.dispatch(incrementLikeButton(10));
store.dispatch(incrementLikeButton());
