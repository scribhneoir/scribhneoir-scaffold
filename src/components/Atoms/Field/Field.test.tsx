import React, { useState } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Field from './index';

const setValue = vi.fn((text) => {
  return text;
});

describe('Atoms/Field', () => {
  beforeEach(() => {
    render(
      <Field
        ariaLabel='field'
        onChange={setValue}
        value={'hello world'}
      />
    );
  });

  test('Render Field', () => {
    const field: HTMLInputElement = screen.getByLabelText('field');
    expect(field).toBeDefined();
    expect(field.value).toBe('hello world');
  });

  test('Edit Text', () => {
    const field: HTMLInputElement = screen.getByLabelText('field');
    fireEvent.change(field, { target: { value: 'Good Day' } });
    expect(setValue).toHaveBeenCalled();
    expect(setValue).toHaveReturnedWith('Good Day');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
