import React from 'react'
const {shape} = React.PropTypes

const ProductRating = React.createClass({
  propTypes: {
    rating: shape({})
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
