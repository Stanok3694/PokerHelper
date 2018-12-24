const findBiggerComb = require('./findBiggerComb');
const testData = require('./testData');


describe('poker Helper', () => {
  test('1) cover pair, two pairs, three and fourth and fullhouse', () => {
    expect(findBiggerComb(testData.pair)).toBe('Pair');
    expect(findBiggerComb(testData.three)).toBe('Three');
    expect(findBiggerComb(testData.fullhouse)).toBe('Fullhouse');
    expect(findBiggerComb(testData.twoPair)).toBe('Two pairs');
    expect(findBiggerComb(testData.four)).toBe('Four');
  });

  test('6) cover flush, straight flush and royal flush', () => {
    expect(findBiggerComb(testData.flush)).toBe('Flush');
    expect(findBiggerComb(testData.royalFlush)).toBe('Flush royale');
    expect(findBiggerComb(testData.straightFlush)).toBe('Straight flush');
  });

  test('9) cover straight and no combinations', () => {
    expect(findBiggerComb(testData.straight)).toBe('Straight');
    expect(findBiggerComb(testData.none)).toBe('Older card');
  });


  // for further jest testing pls use npm run test:coverage. just fyi.
});
