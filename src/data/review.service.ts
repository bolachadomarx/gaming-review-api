import { CreateConsoleDto } from './../domain/console/console.dto'
import { Model } from 'mongoose'
import { CreateReviewDto } from '@/domain/review/review.dto'
import { Review } from '@/domain/review/review'

export class ReviewService {
  constructor(private readonly reviewModel: Model<Review>) {}

  async create(review: CreateReviewDto) {
    const createdReview = await this.reviewModel.create(review)
    return createdReview
  }

  async get(_id: string) {
    const review = await this.reviewModel.findById(_id)
    return review
  }

  async list(queryParams) {
    const reviews = await this.reviewModel.find(queryParams)
    return reviews
  }

  async update(review: CreateReviewDto, _id: string) {
    const updated = await this.reviewModel.findOneAndUpdate({ _id }, review)
    return updated
  }

  async delete(_id: string) {
    const deleted = await this.reviewModel.deleteOne({ _id })
    return deleted
  }
}
