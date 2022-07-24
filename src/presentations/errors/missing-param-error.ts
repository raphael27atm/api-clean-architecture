export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`MIssing param: ${paramName}`)

    this.name = 'MissingParamError'
  }
}
