import { render, screen } from '@testing-library/react';
import Title from '../components/Title';

describe('Title', () => {
  it('renders Hello World title', () => {
    render(<Title />);
    const titleElement = screen.getByText(/Hello World/i);
    expect(titleElement).toBeInTheDocument();
  });
});
