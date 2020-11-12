const {
  fetchOffset,
  formatCurrency
} = require('../../../common/helpers/movieHelpers')

describe('FetchOffset', () => {
  it('Expect the correct offset for page 1', () => {
    const result = fetchOffset(1);
    expect(result).toEqual(0);
  })

  it('Expect the correct offset for page 3', () => {
    const result = fetchOffset(3);
    expect(result).toEqual(100);
  })

  it('Expect 0 for a random thing being past in', () => {
    const result = fetchOffset('a');
    expect(result).toEqual(0);
  })

  it('Expect 0 if nothing is past in', () => {
    const result = fetchOffset();
    expect(result).toEqual(0);
  })

});

describe('formatCurrency', () => {
  // I should have asked a few questions.
  // like with currency, return cents? return .00
  it('if nothing past in Expect the correct currency string', () => {
    const result = formatCurrency();
    expect(result).toEqual('$0.00');
  })

  it('if 0 was past in', () => {
    const result = formatCurrency(0);
    expect(result).toEqual('$0.00');
  })

  it('if 200 was past in', () => {
    const result = formatCurrency(200);
    expect(result).toEqual('$200.00');
  })

  it('if 4000000000', () => {
    const result = formatCurrency(200);
    expect(result).toEqual('$4,000,000,000.00');
  })

  it('if 4000000000.35 round down', () => {
    const result = formatCurrency(200);
    expect(result).toEqual('$4,000,000,000.00');
  })

});