import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nickname', () => {
  render(<App />);
  const nickElement = screen.getByText(/Devnol/i);
  expect(nickElement).toBeInTheDocument();
});
