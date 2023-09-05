import { render, screen } from '@testing-library/react';
import Boxes from '../components/Boxes';

describe('Boxes', () => {
  it('renders the animated sqr', () => {
    render(<Boxes />);
    const aniSqr = screen.getByTestId('sqr1');
    expect(aniSqr).toBeInTheDocument();
  });

  it('renders the 2nd animated sqr', () => {
    render(<Boxes />);
    const sqr2 = screen.getByTestId('sqr2');
    expect(sqr2).toBeInTheDocument();
  });
});
