export class InvaliParamError extends Error {
  constructor (paramName: string) {
    super(`Invalid param: ${paramName}`)

    this.name = 'InvaliParamError'
  }
}
