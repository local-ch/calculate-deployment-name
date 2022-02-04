import calculate from '../src/calculate'

describe('Calculate', () => {
  it('contains branch name and app name as lower case characters', () => {
    const result = calculate('appName', 'branchName')
    expect(result).toMatch(/appname/)
    expect(result).toMatch(/branchname/)
  })

  it('translates on-ascii characters to ascii', () => {
    const result = calculate('äppNäim', 'bränchNöim')
    expect(result).toMatch(/^[^äö]+$/)
  })

  it('shortens deployment names to 47 characters', () => {
    const result = calculate(
      'long app name',
      'dependabot/npm_and_yarn/typescript-eslint/eslint-plugin-4.17.0'
    )
    expect(result.length).toBe(47)
  })

  describe('slugification', () => {
    it('slugifies deployment name', () => {
      const result = calculate(
        'appName',
        'branchName w/ spaces_and_underscores'
      )
      expect(result).toEqual('appname-branchname-w-spaces-and-underscores')
    })

    it('does not start or end deployment name with a -', () => {
      const result = calculate('--app-name', 'branch-name-_')
      expect(result).toMatch(/^[^-].*[^-]$/)
    })
  })
})
