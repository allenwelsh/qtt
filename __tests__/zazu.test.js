const config = require('../zazu.json.js')

describe('zazu.json', () => {
  test('is valid', () => {
    expect(config).toBeInstanceOf(Object)
  })
})
