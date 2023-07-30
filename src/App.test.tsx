import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component testing', () => {

  beforeEach(() => {
    render(<App />);
  })
  test('renders add button', () => {

    const button = screen.getByTestId('add')
    expect(button).toBeInTheDocument();
  });
  test('click add button', () => {
    const button = screen.getByTestId('add')
    fireEvent.click(button)
    const modalElement = screen.getAllByTestId('save-todo');
    expect(modalElement).toBeDefined();
  });
  
  test('renders clear button', () => {

    const button = screen.getByTestId('clear')

    expect(button).toBeInTheDocument();
  })

})