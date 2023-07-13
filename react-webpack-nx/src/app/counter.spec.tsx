import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Counter from './counter';

test('counter renders', () => {
  render(<Counter count={0} onIncrement={() => {}} />);
});

test('counter renders props count', () => {
  render(<Counter count={1234} onIncrement={() => {}} />);
  expect(screen.getByText(1234)).toBeInTheDocument();
});

test('counter calls onIncrement on click', () => {
  const spy = jest.fn();
  render(<Counter count={1234} onIncrement={spy} />);

  fireEvent.click(screen.getByText(1234));
  expect(spy).toHaveBeenCalled();
});
