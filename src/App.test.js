import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Loader component with LOADING... text', () => {
    render(<App />);
    const loaderElement = screen.getByText(/LOADING.../i);
    expect(loaderElement).toBeInTheDocument();
  });

  test('renders Navbar with Home link', () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders Hero section with main heading', () => {
    render(<App />);
    // Replace with actual text from your Hero section, e.g., your name or tagline
    const heroHeading = screen.getByText(/Welcome to My Portfolio/i); // Adjust to match your Hero content
    expect(heroHeading).toBeInTheDocument();
  });
});