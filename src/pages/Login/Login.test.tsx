import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Login from './index';

describe('Pages/Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('Render Login', () => {
    const login = screen.getByLabelText('login');
    expect(login).toBeDefined();
  });

  test('Render Login Form', () => {
    const loginForm = screen.queryByLabelText('loginForm');
    const signUpForm = screen.queryByLabelText('signUpForm');
    expect(loginForm).toBeDefined();
    expect(signUpForm).toBeNull();
  });

  test('Toggle Sign Up Form', () => {
    const formToggleButton = screen.getByLabelText('formToggle');
    fireEvent.click(formToggleButton);
    const loginForm = screen.queryByLabelText('loginForm');
    const signUpForm = screen.queryByLabelText('signUpForm');
    expect(loginForm).toBeNull();
    expect(signUpForm).toBeDefined();
  });

  test('Edit Email', () => {
    const email: HTMLInputElement = screen.getByLabelText('email');
    const emailValue = 'test@email.com';
    fireEvent.change(email, { target: { value: emailValue } });
    expect(email.value).toBe(emailValue);
  });

  test('Edit Password', () => {
    const password: HTMLInputElement = screen.getByLabelText('password');
    const passwordValue = 'test@email.com';
    fireEvent.change(password, { target: { value: passwordValue } });
    expect(password.value).toBe(passwordValue);
  });
});
