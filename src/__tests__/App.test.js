import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders Hello World', () => {
    render(<App />);
    const hwElement = screen.getByText(/Hello World/i);
    expect(hwElement).toBeInTheDocument();
  });

  it('renders the animated sqr', () => {
    render(<App />);
    const aniSqr = screen.getByTestId('animated-sqr');
    expect(aniSqr).toBeInTheDocument();
  });

  it('renders the 2nd animated sqr', () => {
    render(<App />);
    const sqr2 = screen.getByTestId('animated-sqr2');
    expect(sqr2).toBeInTheDocument();
  });
});
