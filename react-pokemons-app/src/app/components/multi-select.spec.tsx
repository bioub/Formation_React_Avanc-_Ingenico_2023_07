import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import MultiSelect from './multi-select';

test('MultiSelect renders', () => {
  const spy = vitest.fn();
  render(<MultiSelect items={['Rouge', 'Vert', 'Bleu']} selected={['Vert']} onSelect={spy}/>);
  expect(screen.queryByText('Select...')).not.toBeInTheDocument();
});

test('MultiSelect renders', () => {
  const spy = vitest.fn();
  render(<MultiSelect items={['Rouge', 'Vert', 'Bleu']} selected={[]} onSelect={spy}/>);
  fireEvent.click(screen.getByText('Select...'));
  expect(screen.queryByText('Rouge')).toBeInTheDocument();
});

test('MultiSelect renders', () => {
  const spy = vitest.fn();
  render(<MultiSelect items={['Rouge', 'Vert', 'Bleu']} selected={[]} onSelect={spy}/>);
  fireEvent.click(screen.getByText('Select...'));
  fireEvent.click(screen.getByText('Rouge'));
  fireEvent.click(screen.getByText('Bleu'));
  expect(spy).toHaveBeenNthCalledWith(1, ['Rouge']);
  expect(spy).toHaveBeenNthCalledWith(2, ['Bleu']);
});
