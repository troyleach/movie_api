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
    const result = formatCurrency({});
    expect(result).toEqual('$0');
  })

  it('if 0 was past in', () => {
    const result = formatCurrency({ number: 0 });
    expect(result).toEqual('$0');
  })

  it('if a string was past in', () => {
    expect(() => {
      formatCurrency({ number: '200' });
    }).toThrow('Must provide a number')
  })

  it('if 200 was past in', () => {
    const result = formatCurrency({ number: 200 });
    expect(result).toEqual('$200');
  })

  it('if 4000000000', () => {
    const result = formatCurrency({ number: 4000000000 });
    expect(result).toEqual('$4,000,000,000');
  })

  it('if 4000000000.35 remove decimals', () => {
    const result = formatCurrency({ number: 4000000000.3500 });
    expect(result).toEqual('$4,000,000,000');
  })

  it('Expect positive result with lots of decimals', () => {
    const result = formatCurrency({ number: 4000000000.35344 });
    expect(result).toEqual('$4,000,000,000');
  })

  it('Japanese Yen', () => {
    const result = formatCurrency({ country: 'ja-JP', number: 123456.789, currency: 'JPY', decimals: 3 });
    expect(result).toEqual('￥123,456.789');
  })

});