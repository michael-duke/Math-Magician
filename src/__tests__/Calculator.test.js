const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Calculator = require('../components/Calculator').default;

describe('Tests for Calculator component', () => {
  it('Renders Calculator page', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

  it('Testing if the heading \'Let\'s do some math!\' is on the Calculator Page', () => {
    render(<Calculator />);
    const calculatorHeading = screen.getByText(/Let's do some math!/i);
    expect(calculatorHeading).toBeInTheDocument();
  });

  it('Simulating simple user interaction 121 is printed on dislpay', () => {
    render(<Calculator />);
    const displayNumber = document.getElementById('display');
    const key1 = screen.getByText('1');
    const key2 = screen.getByText('2');
    fireEvent.click(key1);
    fireEvent.click(key2);
    fireEvent.click(key1);
    expect(displayNumber.textContent).toBe('121');
  });

  it('Simulating user interaction 4*7 = 28', () => {
    render(<Calculator />);

    const displayNumber = document.getElementById('display');
    const key4 = screen.getByText('4');
    const key7 = screen.getByText('7');
    const keyMult = screen.getByText('*');
    const keyEquals = screen.getByText('=');

    fireEvent.click(key4);
    fireEvent.click(keyMult);
    fireEvent.click(key7);
    fireEvent.click(keyEquals);

    expect(displayNumber.textContent).toBe('28');
  });
});
