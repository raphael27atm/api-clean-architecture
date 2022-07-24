import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../utils/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('Missing param: name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('Missing param: email'))
    }
  }
}
