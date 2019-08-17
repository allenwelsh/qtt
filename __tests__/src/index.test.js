const index = require('../../src/')
const qtts = require('../../src/qtts')

describe('index.js', () => {
  beforeEach(() => {
    qtts.search = jest.fn()
    index()('git-pick')
  })

  afterEach(() => jest.resetAllMocks())

  test('call qtts.search with "git-pick"', () => {
    expect(qtts.search).toBeCalledWith('git-pick')
  })
})
