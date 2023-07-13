import { screen, render, fireEvent } from '@testing-library/react';
import { expect, vitest } from 'vitest';
import Counter from './counter';


test('counter renders', () => {
  render(<Counter count={0} onIncrement={() => {}} />);
});

test('counter renders props count', () => {
  render(<Counter count={1234} onIncrement={() => {}} />);
  expect(screen.getByText(1234)).toBeInTheDocument();
});

test('counter calls onIncrement on click', () => {
  const spy = vitest.fn();
  render(<Counter count={1234} onIncrement={spy} />);

  fireEvent.click(screen.getByText(1234));
  expect(spy).toHaveBeenCalledOnce();
});
