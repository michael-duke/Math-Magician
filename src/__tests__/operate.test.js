import operate from '../logic/operate.js';

describe('Test the logic of Calculte', () => {
  it('Takes 4 + 3 and return 7', () => {
    expect(operate(4, 3, '+')).toEqual('7');
  });
  it('Takes 1 - 3 and return 4', () => {
    expect(operate(1, 3, '-')).toEqual('-2');
  });
  it('Takes 3 x 3 and return 9', () => {
    expect(operate(3, 3, 'x')).toEqual('9');
  });
  it('Takes 6 / 2 and return 3', () => {
    expect(operate(6, 2, '÷')).toEqual('3');
  });
  it('Takes 8 / 0 and return "Can\'t divide by 0."', () => {
    expect(operate(8, 0, '÷')).toEqual('Can\'t divide by 0.');
  });
  it('Takes 4 % 2 and return 2', () => {
    expect(operate(4, 2, '%')).toEqual('0');
  });
  it('Takes 4 % 0 and return "Can\'t find modulo as can\'t divide by 0."', () => {
    expect(operate(4, 0, '%')).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
  it('Throw an Error if the operator parametre is not an operator', () => {
    expect(() => (operate(4, 0, ';')).toThrow(Error));
  });
});