import assert from 'node:assert';
import test from 'node:test';
import { greet } from '../utils.ts';

test('greet', () => {
  assert.strictEqual(greet('foo'), 'Hello, foo!');
});
