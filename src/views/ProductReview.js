import React from 'react'
import ProductRating from './ProductRating'
const {arrayOf, shape} = React.PropTypes

const ProductReview = React.createClass({
  propTypes: {
    review: arrayOf(shape({}))
  },
  render () {
    const reviewArray = this.props.review
    const reviewObj = reviewArray[0] || {}
    const { title, review, screenName, datePosted, overallRating } = reviewObj
    let rating = overallRating || 0
    rating = parseInt(rating, 10) * 20
    let formatedDate
    if (datePosted) {
      formatedDate = new Date(datePosted)
      formatedDate = formatedDate.toDateString().split(' ').slice(1, 4)
      formatedDate = formatedDate.join(' ')
    }

    return (
      <div className='review-container'>
        <ProductRating rating={rating} />
        <h6 className='review-heading'>{title}</h6>
        <div className='review-content'>{review}</div>
        <div>
          <span className='review-user'>{screenName}</span>
          <span className='review-date'> {formatedDate}</span>
        </div>
      </div>
    )
  }
})

export default ProductReview
