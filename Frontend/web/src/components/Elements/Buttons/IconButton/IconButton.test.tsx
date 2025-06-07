import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('renders forward arrow image when type="forward"', () => {
    render(<IconButton type="forward" onClick={() => {}}/>);
    const button = screen.getByRole('button', { name: /forward button/i });
    expect(button).toBeInTheDocument();
    expect(button.style.backgroundImage).toContain('reshot-icon-bold-arrow-up');
  });
});
