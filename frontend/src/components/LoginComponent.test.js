/**
 * @jest-environment jsdom
 */

import {render, screen, fireEvent} from '@testing-library/react';
import React from 'react'
import LoginComponent from './LoginComponent'

describe('Login tests', () => {

    test('renders login button', () => {
      render(<LoginComponent />);
      const loginButton = screen.getByTestId('loginButton')
    })


    it('login button calls login function', () => {
      const mockLogin = jest.fn()
      render(<LoginComponent handleSignIn={mockLogin}/>);

      const loginButton = screen.getByTestId('loginButton')
      fireEvent.click(loginButton)
    
      expect(mockLogin).toHaveBeenCalled();
    });
});
