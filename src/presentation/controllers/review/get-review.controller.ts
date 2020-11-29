import { notFound } from './../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { ReviewService } from '@/data/review.service'

export class GetReviewController implements Controller {
  constructor(private readonly reviewService: ReviewService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idReview = httpRequest.params.idReview
      const review = await this.reviewService.get(idReview)

      return review ? success(review) : notFound(new Error('Review not found'))
    } catch (error) {
      return serverError(error)
    }
  }
}
