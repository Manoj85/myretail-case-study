import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductInfo from './ProductInfoComponent'
import ImageCarousel from './ImageCarousel'
import ProductReviewComponent from './ProductReviewComponent'
const {shape} = React.PropTypes

const ProductDetail = React.createClass({
  propTypes: {
    productData: shape({})
  },
  render () {
    const data = this.props.productData
    const review = data.CustomerReview || {}
    let images = []

    const imagesArray = data.Images || []
    const productImages = imagesArray[0] || {}
    const alternateImages = productImages.AlternateImages || []
    const primaryImages = productImages.PrimaryImage || []

    if (alternateImages.length > 0) {
      alternateImages.forEach((imgObj) => {
        if (imgObj.image) {
          images.push(imgObj.image)
        }
      })
    }
    if (primaryImages[0] && primaryImages[0].image) {
      images.push(primaryImages[0].image)
    }

    return (
      <Row className='product-detail-container'>
        <Col lg={6} md={6} sm={12}>
          <div className='product-carousel'>
            <h2 className='product-title'>{data.title}</h2>
            <ImageCarousel images={images} />
            <div className='sr-large'>
              <ProductReviewComponent review={review} />
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
