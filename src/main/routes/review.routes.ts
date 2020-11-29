import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'
import {
  makeCreateReviewController,
  makeUpdateReviewController,
  makeGetAllReviewController,
  makeGetReviewController,
  makeDeleteReviewController,
} from '@/main/factory/review/review.factories'

export default (router: Router): void => {
  router.post('/review', adaptRoute(makeCreateReviewController()))
  router.put('/review/:idReview', adaptRoute(makeUpdateReviewController()))
  router.get('/review', adaptRoute(makeGetAllReviewController()))
  router.get('/review/:idReview', adaptRoute(makeGetReviewController()))
  router.delete('/review/:idReview', adaptRoute(makeDeleteReviewController()))
}
