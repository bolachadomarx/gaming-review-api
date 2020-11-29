import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { ReviewService } from '@/data/review.service'

export class GetAllReviewController implements Controller {
  constructor(private readonly reviewService: ReviewService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const reviews = await this.reviewService.list()

      return success(reviews)
    } catch (error) {
      return serverError(error)
    }
  }
}
