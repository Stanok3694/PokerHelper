const testData = {
  royalFlush: {
    hand: [
      {
        value: 14,
        suit: 'a',
      },
      {
        value: 1,
        suit: 'b',
      },
    ],
    table: [
      {
        value: 12,
        suit: 'a',
      },
      {
        value: 11,
        suit: 'a',
      },
      {
        value: 13,
        suit: 'a',
      },
      {
        value: 11,
        suit: 'd',
      },
      {
        value: 10,
        suit: 'a',
      },
    ],
  },

  straightFlush: {
    hand:
    [{ value: 4, suit: 'a' },
      { value: 3, suit: 'a' }],
    table:
      [{ value: 7, suit: 'a' },
        { value: 5, suit: 'a' },
        { value: 6, suit: 'a' }],
  },

  four: {
    hand:
      [{ value: 5, suit: 'a' },
        { value: 4, suit: 'a' }],
    table:
      [{ value: 5, suit: 'b' },
        { value: 5, suit: 'c' },
        { value: 5, suit: 'd' }],
  },

  three: {
    hand:
      [{ value: 4, suit: 'd' },
        { value: 12, suit: 'a' }],
    table:
      [{ value: 9, suit: 'd' },
        { value: 10, suit: 'c' },
        { value: 10, suit: 'b' },
        { value: 10, suit: 'a' },
        { value: 11, suit: 'a' }],
  },
  fullhouse: {
    hand:
      [{ value: 5, suit: 'a' },
        { value: 6, suit: 'a' }],
    table:
      [{ value: 5, suit: 'b' },
        { value: 6, suit: 'b' },
        { value: 5, suit: 'd' },
        { value: 3, suit: 'c' }],
  },
  flush: {
    hand:
      [{ value: 1, suit: 'b' },
        { value: 2, suit: 'b' }],
    table:
      [{ value: 5, suit: 'b' },
        { value: 9, suit: 'b' },
        { value: 10, suit: 'b' }],
  },
  straight: {
    hand:
      [{ value: 5, suit: 'a' },
        { value: 11, suit: 'b' }],
    table:
      [{ value: 8, suit: 'c' },
        { value: 7, suit: 'd' },
        { value: 4, suit: 'c' },
        { value: 6, suit: 'd' }],
  },
  twoPair: {
    hand:
      [{ value: 11, suit: 'a' },
        { value: 6, suit: 'a' }],
    table:
      [{ value: 5, suit: 'a' },
        { value: 5, suit: 'c' },
        { value: 11, suit: 'c' },
        { value: 6, suit: 'd' }],
  },
  pair: {
    hand:
      [{ value: 1, suit: 'a' },
        { value: 14, suit: 'd' }],
    table:
      [{ value: 13, suit: 'c' },
        { value: 9, suit: 'a' },
        { value: 9, suit: 'c' },
        { value: 5, suit: 'b' }],
  },
  none: {
    hand:
      [{ value: 14, suit: 'a' },
        { value: 11, suit: 'b' }],
    table:
      [{ value: 4, suit: 'c' },
        { value: 5, suit: 'd' },
        { value: 6, suit: 'c' }],
  },
};

module.exports = testData;
