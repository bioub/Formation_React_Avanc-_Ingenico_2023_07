import { LIKES_INCREMENT } from './constants';


export function incrementLikeButton(step = 1) {
  return {
    type: LIKES_INCREMENT,
    payload: step,
  };
}

