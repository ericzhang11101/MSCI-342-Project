/**
 * @jest-environment jsdom
 */

import {render, screen, fireEvent} from '@testing-library/react';
import React from 'react'
import Login from './Login'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Login tests', () => {
  let realUseContext;
  let useContextMock;
  // Setup mock
  beforeEach(() => {
      realUseContext = React.useContext;
      useContextMock = React.useContext = jest.fn();
  });
  // Cleanup mock
  afterEach(() => {
      React.useContext = realUseContext;
  });


  function renderComponent() {
    useContextMock.mockReturnValue({
      UserContext: {setUser: jest.fn()}
    });
    const element = new ShallowRenderer().render(
        <Login />
    );
  }

    test('renders login button', () => {
        renderComponent();

        const loginButton = screen.getByTestId('loginButton')
        fireEvent.click(loginButton)

    })


    it('loads restaurants on first render', () => {
        renderComponent();
        // expect(loadRestaurants).toHaveBeenCalled();
    });

  it('displays the restaurants', () => {
    renderComponent();
    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
