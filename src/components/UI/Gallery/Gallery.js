import React, { Component } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Gallery.module.css'
// JSX
import ReactResizeDetector from 'react-resize-detector'

class Gallery extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.any
  }

  constructor (props) {
    super(props)
    this.myGallery = React.createRef()
    this.state = {
      gallerySize: null
    }
  }

  setGalleryDimensions = () => {
    this.setState(() => {
      return {
        gallerySize: {
          width: this.myGallery.current.offsetWidth,
          height: this.myGallery.current.offsetWidth / (4 / 3)
        }
      }
    })
  }

  componentDidMount() {
    this.setGalleryDimensions()
  }

  render() {
    const { children } = this.props
    if (!children) { return null } // Pointer protection
    // Cloning components to pass dimensions props
    const childrenWithProps = React.Children.map(children, child => {
      if (child && child.props && child.props.modifySize) {
        return React.cloneElement(child, { style: { ...this.props.style, ...this.state.gallerySize } })
      } else {
        return child
      }
    })
    return (
      <div className={classes.Wrapper}>
        <ReactResizeDetector handleWidth handleHeight onResize={this.setGalleryDimensions} />
        <div ref={this.myGallery}
          className={classes.Container}>
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default Gallery
