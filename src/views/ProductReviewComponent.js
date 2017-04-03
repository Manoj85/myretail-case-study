import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductReview from './ProductReview'
import ProductRating from './ProductRating'
const {arrayOf, shape} = React.PropTypes

const ProductReviewComponent = React.createClass({
  propTypes: {
    reviewArr: arrayOf(shape({}))
  },
  render () {
    const reviewArr = this.props.reviewArr || []
    const review = reviewArr[0] || {}
    const proReview = review.Pro || []
    const conReview = review.Con || []

    let rating = review.consolidatedOverallRating || 0
    rating = parseInt(rating, 10) * 20

    let viewAll
    if (review.totalReviews) {
      viewAll = `view all ${review.totalReviews} reviews`
    }

    return (
      <div>
        <div className='overall-ratings clearfix'>
          <span className='pull-left'><ProductRating rating={rating} /></span>
          <span className='pull-left'>overall</span>
          <span className='pull-right'>{viewAll}</span>
        </div>
        <Row className='short-review-container'>
          <Col lg={6} md={6} sm={6} xs={6} className='short-review-section'>
            <h3 className='short-review-header'>Pro</h3>
            <div className='short-review-info'>most helpful 4-5 star review</div>
            <div><ProductReview review={proReview} /> </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className='short-review-section'>
            <h3 className='short-review-header'>Con</h3>
            <div className='short-review-info'>most helpful 1-2 star review</div>
            <div><ProductReview review={conReview} /> </div>
          </Col>
        </Row>
      </div>
    )
  }
})

export default ProductReviewComponent
