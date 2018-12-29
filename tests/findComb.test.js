/* eslint-disable jest/no-disabled-tests */
const findBiggerComb = require('../lookingForCombs/findBiggerComb');
// const testData = require('./testData');
const make = require('../datagen v 2.0/iLoveSwitches');
const compare = require('../lookingForCombs/findCombination');
const findRoyalStraight = require('../lookingForCombs/checkFlush/isRoyalStraight');
const findStraightFlush = require('../lookingForCombs/checkFlush/isStraightFlush');
const findSimpleFlush = require('../lookingForCombs/checkFlush/isSimpleFlush');
const findSimpleStraight = require('../lookingForCombs/checkStraight/isSimpleStraight');
const findPair = require('../lookingForCombs/checkPairs/isPair');
const findTwoPairs = require('../lookingForCombs/checkPairs/isTwoPairs');
const findThree = require('../lookingForCombs/checkPairs/isThree');
const findFour = require('../lookingForCombs/checkPairs/isFour');
const findFullhouse = require('../lookingForCombs/checkPairs/isFullhouse');
const makeMagic = require('../utilities/makeMagic');
const makeNoComb = require('../datagen v 2.0/makeSome/makeNoCombinations');

describe.skip('poker Helper', () => {
  describe('testing findPairsCombs block', () => {
    test('1) should return pair', () => {
      expect(compare(findPair(make('pair')))).toBe('Pair');
    });

    test('2) should return two pairs', () => {
      expect(compare(findTwoPairs(make('two pairs')))).toBe('Two pairs');
    });

    test('3) should return three of a kind', () => {
      expect(compare(findThree(make('three')))).toBe('Three');
    });

    test('4) should return fourth of a kind', () => {
      expect(compare(findFour(make('four')))).toBe('Four');
    });

    test('5) should return fullhouse', () => {
      expect(compare(findFullhouse(make('fullhouse')))).toBe('Fullhouse');
    });
  });


  describe('testind findFlushCombs block', () => {
    test('6) should return flush', () => {
      expect(compare(findSimpleFlush(make('flush')))).toBe('Flush');
    });

    test('7) should return straight flush ', () => {
      expect(compare(findStraightFlush(make('straightflush')))).toBe('Straight flush');
    });

    test('8) should return royal flush', () => {
      expect(compare(findRoyalStraight(make('royalflush')))).toBe('Flush royale');
    });
  });

  describe('testing findSimpleStraight block', () => {
    test('9) should return straight', () => {
      expect(compare(findSimpleStraight(make('straight')))).toBe('Straight');
    });
  });

  describe('testing no combinations (older card)', () => {
    test('10) should return no combinations', () => {
      expect(findBiggerComb(makeMagic(makeNoComb()))).toBe('Older card');
    });
  });
});
