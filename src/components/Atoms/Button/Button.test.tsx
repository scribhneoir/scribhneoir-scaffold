import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './index';

const onClickFake = vi.fn(() => {});

describe('Atoms/Button', () => {
  beforeEach(() => {
    render(<Button onClick={onClickFake}>hello world</Button>);
  });

  test('Render Button', () => {
    expect(screen.getByText('hello world')).toBeDefined();
  });

  test('Click Button', () => {
    console.log(fireEvent.click(screen.getByRole('button')));
    expect(onClickFake).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
