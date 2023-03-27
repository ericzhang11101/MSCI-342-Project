import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Home component', () => {
    render(
      
        <App />
    
    );
  });
});