const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Quote = require('../pages/Quote').default;

describe('Tests for Quote component', () => {
  it('Render Quote page', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });

  it("Check if initial quote by 'Dean Schlicter' exists", () => {
    render(<Quote />);
    expect(
      screen.getByText(
        /Go down deep enough into anything and you will find mathematics./i,
      ),
    ).toBeInTheDocument();
  });
});
