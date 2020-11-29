import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { ReviewService } from '@/data/review.service'
import { CreateReviewDto } from '@/domain/review/review.dto'

export class UpdateReviewController implements Controller {
  constructor(private readonly reviewService: ReviewService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body as CreateReviewDto
      const idReview = httpRequest.params.idReview
      const review = await this.reviewService.update(body, idReview)

      return success(review)
    } catch (error) {
      return serverError(error)
    }
  }
}
