import { createAction } from '@reduxjs/toolkit';


/*
export function incrementLikeButton(step = 1) {
  return {
    type: LIKES_INCREMENT,
    payload: step,
  };
}
*/

export const incrementLikeButton = createAction('@likes/increment', (step = 1) => {
  return {
    payload: step
  }
});
