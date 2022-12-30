/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should category typing correctly
 *   - should handle body typing correctly
 *   - should call ThreadInput function when Buat button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';
import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput onCreate={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await userEvent.type(titleInput, 'ini adalah title');

    // Assert
    expect(titleInput).toHaveValue('ini adalah title');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput onCreate={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    // Action
    await userEvent.type(categoryInput, 'ini adalah category');

    // Assert
    expect(categoryInput).toHaveValue('ini adalah category');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput onCreate={() => {}} />);
    const bodyInput = await screen.getByTestId('input-body');

    // Action
    await userEvent.click(bodyInput);
    await userEvent.keyboard('test');

    // Assert
    expect(bodyInput).toHaveTextContent('test');
  });

  it('should call ThreadInput function when thread button is clicked', async () => {
    // Arrange
    const mockThread = jest.fn();
    render(<ThreadInput onCreate={mockThread} />);
    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'ini adalah title');

    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'ini adalah category');

    const threadInput = await screen.getByTestId('input-body');
    await userEvent.click(threadInput);
    await userEvent.keyboard('ini adalah body');

    const threadButton = await screen.getByRole('button', { name: 'Buat' });

    // Action
    await userEvent.click(threadButton);

    // Assert
    expect(mockThread).toBeCalledWith({
      title: 'ini adalah title',
      category: 'ini adalah category',
      body: 'ini adalah body',
    });
  });
});
