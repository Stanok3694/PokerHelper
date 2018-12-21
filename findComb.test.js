const findBiggerComb = require('./findBiggerComb');
const testData = require('./testData');


describe('poker Helper', () => {
  
  test('1) cover pair, two pairs, three and fourth and fullhouse', () => {
      expect(findBiggerComb(testData.firstCombination)).toBe('Pair');
      expect(findBiggerComb(testData.secondCombination)).toBe('Three');
      expect(findBiggerComb(testData.thirdCombination)).toBe('Fullhouse');
      expect(findBiggerComb(testData.fourthCombination)).toBe('Two pairs');
      expect(findBiggerComb(testData.fifthCombination)).toBe('Four');
  });
  
});
