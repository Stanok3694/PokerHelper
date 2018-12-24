const testData = {
  royalFlush: {
    hand: [
      {
        weight: 14,
        suit: 'a',
      },
      {
        weight: 1,
        suit: 'b',
      },
    ],
    table: [
      {
        weight: 12,
        suit: 'a',
      },
      {
        weight: 11,
        suit: 'a',
      },
      {
        weight: 13,
        suit: 'a',
      },
      {
        weight: 11,
        suit: 'd',
      },
      {
        weight: 10,
        suit: 'a',
      },
    ],
  },

  straightFlush: {
    hand:
    [{ weight: 4, suit: 'a' },
      { weight: 3, suit: 'a' }],
    table:
      [{ weight: 7, suit: 'a' },
        { weight: 5, suit: 'a' },
        { weight: 6, suit: 'a' }],
  },

  four: {
    hand:
      [{ weight: 5, suit: 'a' },
        { weight: 4, suit: 'a' }],
    table:
      [{ weight: 5, suit: 'b' },
        { weight: 5, suit: 'c' },
        { weight: 5, suit: 'd' }],
  },

  three: {
    hand:
      [{ weight: 4, suit: 'd' },
        { weight: 12, suit: 'a' }],
    table:
      [{ weight: 9, suit: 'd' },
        { weight: 10, suit: 'c' },
        { weight: 10, suit: 'b' },
        { weight: 10, suit: 'a' },
        { weight: 11, suit: 'a' }],
  },
  fullhouse: {
    hand:
      [{ weight: 5, suit: 'a' },
        { weight: 6, suit: 'a' }],
    table:
      [{ weight: 5, suit: 'b' },
        { weight: 6, suit: 'b' },
        { weight: 5, suit: 'd' },
        { weight: 3, suit: 'c' }],
  },
  flush: {
    hand:
      [{ weight: 1, suit: 'b' },
        { weight: 2, suit: 'b' }],
    table:
      [{ weight: 5, suit: 'b' },
        { weight: 9, suit: 'b' },
        { weight: 10, suit: 'b' }],
  },
  straight: {
    hand:
      [{ weight: 5, suit: 'a' },
        { weight: 11, suit: 'b' }],
    table:
      [{ weight: 8, suit: 'c' },
        { weight: 7, suit: 'd' },
        { weight: 4, suit: 'c' },
        { weight: 6, suit: 'd' }],
  },
  twoPair: {
    hand:
      [{ weight: 11, suit: 'a' },
        { weight: 6, suit: 'a' }],
    table:
      [{ weight: 5, suit: 'a' },
        { weight: 5, suit: 'c' },
        { weight: 11, suit: 'c' },
        { weight: 6, suit: 'd' }],
  },
  pair: {
    hand:
      [{ weight: 1, suit: 'a' },
        { weight: 14, suit: 'd' }],
    table:
      [{ weight: 13, suit: 'c' },
        { weight: 9, suit: 'a' },
        { weight: 9, suit: 'c' },
        { weight: 5, suit: 'b' }],
  },
  none: {
    hand:
      [{ weight: 14, suit: 'a' },
        { weight: 11, suit: 'b' }],
    table:
      [{ weight: 4, suit: 'c' },
        { weight: 5, suit: 'd' },
        { weight: 6, suit: 'c' }],
  },
};

module.exports = testData;
