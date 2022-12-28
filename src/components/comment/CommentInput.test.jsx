/**
 * skenario testing
 *
 * - CommentInput component
 *   - should handle comment typing correctly
 *   - should call CommentInput function when Kirim button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentInput from './CommentInput';
import '@testing-library/jest-dom';

describe('CommentInput component', () => {
  it('should handle comment typing correctly', async () => {
    // Arrange
    render(<CommentInput onCreateComment={() => {}} />);
    const commentInput = await screen.getByTestId('comment-input__field');
    // Action
    await userEvent.click(commentInput);
    await userEvent.keyboard('test');

    // Assert
    expect(commentInput).toHaveTextContent('test');
  });

  it('should call comment function when comment button is clicked', async () => {
    // Arrange
    const mockComment = jest.fn();
    render(<CommentInput onCreateComment={mockComment} />);
    const commentInput = await screen.getByTestId('comment-input__field');
    await userEvent.click(commentInput);
    await userEvent.keyboard('test');
    const commentButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(commentButton);

    // Assert
    expect(mockComment).toBeCalledWith({
      content: 'test',
    });
  });
});
