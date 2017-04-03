import React from 'react'
import { Button } from 'react-bootstrap'
// import Promotions from './Promotions';
// import Quantity from '../common/Quantity';
// import ProductHighlights from './ProductHighlights';
// import BuyingOptions from './BuyingOptions';
import ProductReviewComponent from './ProductReviewComponent'

const {shape} = React.PropTypes

const ProductInfo = React.createClass({
  propTypes: {
    productData: shape({})
  },
  render () {
    const data = this.props.productData
    const reviewArr = data.CustomerReview || []
    const offers = data.Offers
    // const promotions = data.Promotions
    let formattedPriceValue, priceQualifier

    if (offers &&
        offers[0] &&
        offers[0].OfferPrice &&
        offers[0].OfferPrice[0] &&
        offers[0].OfferPrice[0].formattedPriceValue) {
      formattedPriceValue = offers[0].OfferPrice[0].formattedPriceValue

      if (offers[0].OfferPrice[0].priceQualifier) {
        priceQualifier = offers[0].OfferPrice[0].priceQualifier
      }
    }

    return (
      <div className='product-info-container'>
        <div className='product-price'>
          {formattedPriceValue}
          <span className='gray-text'>{priceQualifier}</span>
        </div>
        {/* <Promotions promotions={promotions} />
        <Quantity className="quantity-container clearfix" defaultQuantity={1} />
        <BuyingOptions productData={productData} />
        */}
        <div className='returns'>
          <span className='separator'>returns</span>
          <span className='return-text'>
            This item must be returned within 30 days of the ship date.
            See <strong>return policy</strong> for details.
            Prices, promotions, styles and availablilty may vary by store and online
          </span>
        </div>
        <div className='small-button-group'>
          <Button>ADD TO REGISTRY</Button>
          <Button>ADD TO LIST</Button>
          <Button>SHARE</Button>
        </div>
        {/* <ProductHighlights features={features} /> */}
        <div className='sr-small'>
          <ProductReviewComponent reviewArr={reviewArr} />
        </div>
      </div>
    )
  }
})

export default ProductInfo
