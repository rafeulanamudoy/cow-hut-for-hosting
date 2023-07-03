import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'
import { IGenericErrorResponse } from '../interfaces/common'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })
  const statusCode = httpStatus.CONFLICT

  return {
    statusCode,
    message: 'validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
