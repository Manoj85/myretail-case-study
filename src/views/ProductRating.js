import React from 'react'
const {number} = React.PropTypes

const ProductRating = React.createClass({
  propTypes: {
    rating: number
  },
  render () {
    const rating = this.props.rating
    return (
      <div className='rating-container'>
        <div className='rating' />
        <div className='rating-fill-container' style={{ width: `${rating}px` }}>
          <div className='rating-fill' /></div>
      </div>
    )
  }
})

export default ProductRating
