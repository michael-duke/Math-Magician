const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const { BrowserRouter: Router } = require('react-router-dom');
const Navbar = require('../components/Navbar').default;

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(navbar).toMatchSnapshot();
  });

  test('check title exist', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(
      screen.getByRole('heading', { name: /Math Magician/i })
    ).toBeInTheDocument();
  });
});
