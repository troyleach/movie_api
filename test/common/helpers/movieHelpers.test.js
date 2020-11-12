const { fetchOffset } = require('../../../common/helpers/movieHelpers')

describe('FetchOffset', () => {
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