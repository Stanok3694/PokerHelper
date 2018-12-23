const findBiggerComb = require('./findBiggerComb');
const testData = require('./testData');


describe('poker Helper', () => {

  test.skip('1) cover pair, two pairs, three and fourth and fullhouse', () => {
      // SO: start Code Review #6.4 link:

      // SO: Code Review #8:

      /* 
        Why do not your tests work? 'cause you are not updated them.
        Your test expect string as the result (and me too) but u have changed the contract.
        And now you return the object.
       
        Please, update your tests, dude, as mentioned on Friday.
      */
      expect(findBiggerComb(testData.firstCombination)).toBe('Pair');
      expect(findBiggerComb(testData.secondCombination)).toBe('Three');
      expect(findBiggerComb(testData.thirdCombination)).toBe('Fullhouse');
      expect(findBiggerComb(testData.fourthCombination)).toBe('Two pairs');
      expect(findBiggerComb(testData.fifthCombination)).toBe('Four');
      // SO: end Code Review #6.4 link.
  });

  // SO: Code Review #9:

  /* 
    there are to many reasons for split your expectaions into separate test.scenarios.
    for example: u can skip target scenarion like I did it above.

    u have to rewrite your tests like I did it below for UNCOVERED STRAIGHT COMBINATION, dude.
  */

  test('6) cover straight', () => {
    const actualResult = findBiggerComb(testData.straight).combination; // <- // SO: Code Review #8: here it is.
    expect(actualResult).toBe('Straight');
  });
  

  // SO: Code Review #10:

  /*
    for further jest testing pls use npm run test:coverage. just fyi. 
    it can be helpfull when you wanna know your test coverage.
    
    if you don't understand why - ask me.
  */
});
