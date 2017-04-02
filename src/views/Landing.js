import React from 'react'
import data from '../../public/item-data.json'
import ProductDetail from './ProductDetailComponent'

const Landing = React.createClass({
  render () {
    const allProductsData = data.CatalogEntryView || []
    const productData = allProductsData[0] || {}

    return (
      <ProductDetail productData={productData} />
    )
  }
})

export default Landing
