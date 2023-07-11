import { forwardRef, MouseEvent, Ref, useState } from 'react';


// Uncontrolled component
/*
function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setLikes(likes + 1);
  }

  return <button className="LikeButton" onClick={handleClick}>{likes}</button>
}
 */

type Props = {
  likes?: number;
  onIncrement?(): void;
}
function LikeButton({ likes, onIncrement }: Props, ref: Ref<HTMLButtonElement>) {
  return <button className="LikeButton" ref={ref}>0</button>
}

export default forwardRef(LikeButton);
