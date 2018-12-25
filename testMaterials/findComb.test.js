const findBiggerComb = require('../lookingForCombs/findBiggerComb');
const testData = require('./testData');


describe('poker Helper', () => {
  describe('testing findPairsCombs block', () => {
    test('1) should return pair', () => {
      expect(findBiggerComb(testData.pair)).toBe('Pair');
    });

    test('2) should return two pairs', () => {
      expect(findBiggerComb(testData.twoPair)).toBe('Two pairs');
    });

    test('3) should return three of a kind', () => {
      expect(findBiggerComb(testData.three)).toBe('Three');
    });

    test('4) should return fourth of a kind', () => {
      expect(findBiggerComb(testData.four)).toBe('Four');
    });

    test('5) should return fullhouse', () => {
      expect(findBiggerComb(testData.fullhouse)).toBe('Fullhouse');
    });
  });


  describe('testind findFlushCombs block', () => {
    test('6) should return flush', () => {
      expect(findBiggerComb(testData.flush)).toBe('Flush');
    });

    test('7) should return straight flush ', () => {
      expect(findBiggerComb(testData.straightFlush)).toBe('Straight flush');
    });

    test('8) should return royal flush', () => {
      expect(findBiggerComb(testData.royalFlush)).toBe('Flush royale');
    });
  });

  describe('testing findSimpleStraight block', () => {
    test('9) should return straight', () => {
      expect(findBiggerComb(testData.straight)).toBe('Straight');
    });
  });

  describe('testing no combinations (older card)', () => {
    test('10) should return no combinations', () => {
      expect(findBiggerComb(testData.none)).toBe('Older card');
    });
  });
});

// for further jest testing pls use npm run test:should returnage. just fyi.
