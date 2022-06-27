import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './index';

const onClickFake = () => {};

describe('Atoms/Button', () => {
  beforeEach(() => {
    render(
      <Button
        onClick={() => {
          return 'hi';
        }}
      >
        hello world
      </Button>
    );
  });

  test('Render Button', () => {
    expect(screen.getByText('hello world')).toBeDefined();
  });

  test('Click Button', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(onClickFake).toBeCalled();
  });
});
