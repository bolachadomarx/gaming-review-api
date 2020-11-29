import { ReviewService } from '@/data/review.service'
import { ReviewSchema, Review } from '@/domain/review/review'
import { CreateReviewController } from '@/presentation/controllers/review/create-review.controller'
import { DeleteReviewController } from '@/presentation/controllers/review/delete-review.controller'
import { GetAllReviewController } from '@/presentation/controllers/review/get-all-review.controller'
import { GetReviewController } from '@/presentation/controllers/review/get-review.controller'
import { UpdateReviewController } from '@/presentation/controllers/review/update-review.controller'
import * as mongoose from 'mongoose'

const reviewModel = mongoose.model('Review', ReviewSchema) as mongoose.Model<Review, {}>
const reviewService = new ReviewService(reviewModel)

export const makeCreateReviewController = () => {
  const createReviewController = new CreateReviewController(reviewService)
  return createReviewController
}

export const makeDeleteReviewController = () => {
  const deleteReviewController = new DeleteReviewController(reviewService)
  return deleteReviewController
}

export const makeGetAllReviewController = () => {
  const getAllReviewController = new GetAllReviewController(reviewService)
  return getAllReviewController
}

export const makeGetReviewController = () => {
  const getReviewController = new GetReviewController(reviewService)
  return getReviewController
}

export const makeUpdateReviewController = () => {
  const updateReviewController = new UpdateReviewController(reviewService)
  return updateReviewController
}
