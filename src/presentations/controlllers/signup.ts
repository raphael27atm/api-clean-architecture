import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../utils/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requeredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requeredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(`Missing param: ${field}`))
      }
    }
  }
}
