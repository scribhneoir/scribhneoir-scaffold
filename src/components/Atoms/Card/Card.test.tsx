import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './index';
describe('Atoms/Text', () => {
  beforeEach(() => {
    render(<Card>hello world</Card>);
  });

  test('Render Card', () => {
    expect(screen.getByText('hello world')).toBeDefined();
  });
});
