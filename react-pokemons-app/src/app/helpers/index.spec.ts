import { expect, test } from 'vitest'; // import { expect, test } from 'jest';
import { formatType } from './index';

test('formatType function', () => {
  expect(formatType('Eau')).toBe('chip blue lighten-1');
});
