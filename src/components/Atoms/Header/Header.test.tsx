import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from './index';
describe('Atoms/Text', () => {
  beforeEach(() => {
    render(<Header>hello world</Header>);
  });

  test('Render Header', () => {
    expect(screen.getByText('hello world')).toBeDefined();
  });
});
