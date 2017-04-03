import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductInfo from './ProductInfoComponent'
const {shape} = React.PropTypes

const ProductDetail = React.createClass({
  propTypes: {
    productData: shape({})
  },
  render () {
    const data = this.props.productData
    // const review = data.CustomerReview || {}
    // const images = []

    return (
      <Row className='product-detail-container'>
        <Col lg={6} md={6} sm={12}>
          <div className='product-carousel'>
            <h2 className='product-title'>{data.title}</h2>
            { /* <Carousel images={images} /> */ }
            <div className='sr-large'>
              { /* <Review review={review} /> */ }
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} >
          { <ProductInfo productData={data} /> }
        </Col>
      </Row>
    )
  }
})

export default ProductDetail
