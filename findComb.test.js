const findForAll = require('./findForAll');
const testData = require('./testData');


describe('poker Helper', () => {
  
  test('1) cover pair, two pairs, three and fourth and fullhouse', () => {
      expect(findForAll(testData.firstCombination)).toBe('Pair');
      expect(findForAll(testData.secondCombination)).toBe('Three');
      expect(findForAll(testData.thirdCombination)).toBe('Fullhouse');
      expect(findForAll(testData.fourthCombination)).toBe('Two pairs');
      expect(findForAll(testData.fifthCombination)).toBe('Four');
  });
  
});
