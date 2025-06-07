import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'; 
import IconButton, {ButtonTypes} from './IconButton';

describe('IconButton', () => {

  Object.entries(ButtonTypes).forEach(([key, value]) => {
    it(`renders correct background image for type="${key}"`, () => {
      render(<IconButton type={value} onClick={() => {}} />);
      const button = screen.getByRole('button', { name: new RegExp(`${value} button`, 'i') });
      expect(button).toBeInTheDocument();
      expect(button.style.backgroundImage).toContain(`icon-${value}.svg`);
    });
  });

  it('uses default size when no props are given', () => {
    render(<IconButton type={ButtonTypes.ArrowUp} onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /up button/i });
    expect(button.style.width).toBe('25%');
    expect(button.style.height).toBe('90px');
  });

  it('applies custom width and height from props', () => {
    render(<IconButton type={ButtonTypes.ArrowUp} onClick={() => {}} width="100px" height="50px" />);
    const button = screen.getByRole('button', { name: /up button/i });
    expect(button.style.width).toBe('100px');
    expect(button.style.height).toBe('50px');
  });

  it('calls onClick function when button is clicked', async () => {
    const onClick = vi.fn();
    render(<IconButton type={ButtonTypes.ArrowUp} onClick={onClick} />);
    const button = screen.getByRole('button', { name: /up button/i });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
