import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset';
}

function Button({type, children}: PropsWithChildren<Props>) {
  console.log('render Button');
  return (
    <button type={type} className="btn">{children}</button>
  )
}

export default Button;
