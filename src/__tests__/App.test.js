import { render } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders App correctly', () => {
    const { appFragment } = render(<App />);
    expect(appFragment).toMatchSnapshot();
  });
});
