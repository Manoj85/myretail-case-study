import React from 'react'
const {shape} = React.PropTypes

const ImagePreloader = React.createClass({
  propTypes: shape({
    className: 'string',
    src: 'string',
    width: 'number',
    height: 'number',
    alt: 'string',
    imageIndex: 'number',
    onClick: 'func',
    onMouseOut: shape(),
    onMouseOver: shape(),
    onMouseMove: shape()
  }),

  onImageLoad () {
    this.setState({
      className: 'image-loading image-loaded'
    })
  },

  render () {
    this.state = {
      className: 'image-loading'
    }
    let className = this.state.className
    const { src, width, height, alt, imageIndex, onClick, onMouseOut, onMouseOver, onMouseMove } = this.props
    if (this.props.className) {
      className = `${this.props.className}${' '}${this.state.className}`
    }
    return (
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        data-index={imageIndex}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
        onLoad={this.onImageLoad}
        className={className}
      />
    )
  }
})

export default ImagePreloader
