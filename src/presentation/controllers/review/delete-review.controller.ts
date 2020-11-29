import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { ReviewService } from '@/data/review.service'

export class DeleteReviewController implements Controller {
  constructor(private readonly reviewService: ReviewService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idReview = httpRequest.params.idReview
      const review = await this.reviewService.delete(idReview)

      return success(review)
    } catch (error) {
      return serverError(error)
    }
  }
}
