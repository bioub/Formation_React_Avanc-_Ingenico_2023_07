import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset';
}

function Button({type, children}: PropsWithChildren<Props>) {
  return (
    <button type={type} className="btn">{children}</button>
  )
}

export default Button;
