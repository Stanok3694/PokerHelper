/* eslint-disable jest/no-disabled-tests */
const findBiggerComb = require('../lookingForCombs/findBiggerComb');
const testData = require('./testData');
const indexAbc = require('../datagen/indexAbc');

describe('poker Helper', () => {
  describe('testing findPairsCombs block', () => {
    test.skip('1) should return pair', () => {
      expect(findBiggerComb(indexAbc())).toBe('Pair');
    });

    test.skip('2) should return two pairs', () => {
      expect(findBiggerComb(indexAbc())).toBe('Two pairs');
    });

    test.skip('3) should return three of a kind', () => {
      expect(findBiggerComb(testData.three)).toBe('Three');
    });

    test.skip('4) should return fourth of a kind', () => {
      expect(findBiggerComb(testData.four)).toBe('Four');
    });

    test.skip('5) should return fullhouse', () => {
      expect(findBiggerComb(testData.fullhouse)).toBe('Fullhouse');
    });
  });


  describe.skip('testind findFlushCombs block', () => {
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

  describe.skip('testing findSimpleStraight block', () => {
    test('9) should return straight', () => {
      expect(findBiggerComb(testData.straight)).toBe('Straight');
    });
  });

  describe.skip('testing no combinations (older card)', () => {
    test('10) should return no combinations', () => {
      expect(findBiggerComb(testData.none)).toBe('Older card');
    });
  });
});
