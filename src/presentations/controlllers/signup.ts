import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { InvaliParamError } from '../errors/invalid-param-error'
import { badRequest } from '../utils/http'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const requeredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requeredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(`Missing param: ${field}`))
      }
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email)

    if (!isValid) {
      return badRequest(new InvaliParamError('email'))
    }
  }
}
