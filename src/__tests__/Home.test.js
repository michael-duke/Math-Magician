const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Home = require('../pages/Home').default;

describe('Tests for Home Component', () => {
  it('Renders Home page', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it("Check if heading 'Welcome to our page' exists", () => {
    render(<Home />);
    const welcomeHeading = screen.getByRole('heading', { name: /Welcome to our page!/i })
    expect(welcomeHeading).toBeInTheDocument();
  });
});
