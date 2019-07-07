import React, { Component } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Other.module.css'
// JSX
import Modal from 'react-png-modal'
import Button from 'react-png-button'
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../../hoc/Layout/ThemeContext/ThemeContext'
import Gallery from '../../UI/Gallery/Gallery'
import Separator from '../../UI/Separator/Separator'
import { Slider, Slide } from '../../UI/Slider'
import ImageFadeIn from '../../UI/ImageFadeIn/ImageFadeIn'
import Title from '../Title/Title'
import InfoSection from '../InfoSection/InfoSection'

class Other extends Component {
  static propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
    company: PropTypes.string,
    logo: PropTypes.string,
    order: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    _context: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      bIsModalOpen: false
    }
  }

  openModal = () => {
    this.setState({
      bIsModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      bIsModalOpen: false
    })
  }

  render() {
    const slides = this.props.images &&
    (
      this.props.images.map((image, index) => {
        return (
          <Slide key={index}>
            <div>
              <ImageFadeIn
                noWrapper
                src={image}
                draggable='false'
              />
            </div>
          </Slide>
        )
      })
    )
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.Gallery}>
            <Gallery style={{ borderRadius: '15px' }}>
              <Button
                button={this.props._context && this.props._context.theme === 'dark' ? (
                  'light'
                ) : 'dark'}
                blockButton
                onClick={this.openModal}
                style={{
                  margin: '0 0 6px'
                }}>Watch Fullscreen</Button>
              <Slider modifySize sticky>
                {slides}
              </Slider>
            </Gallery>
          </div>
          <div style={{ order: this.props.order }} className={classes.Information}>
            <div className={classes.Header}>
              <div className={classes.CategoryContainer}>
                <small className={classes.Category}>{this.props.company}</small>
              </div>
              <Title>{this.props.title}</Title>
            </div>
            <Separator />
            <InfoSection
              title={this.props.title}
              logoTitle={this.props.company}
              src={this.props.logo}
              header='About the project'>
              <div>
                <div>{this.props.description}</div>
              </div>
            </InfoSection>
          </div>
          <Modal
            center
            className={classes.Modal}
            open={this.state.bIsModalOpen}
            closeModal={this.closeModal}>
            <Slider alignItems >
              {this.props.images.map((image, index) => {
                return (
                  <Slide key={index}>
                    <div className={classes.FullscreenContainer}>
                      <ImageFadeIn
                        className={classes.FullscreenImage}
                        draggable='false'
                        style={{ position: 'relative' }}
                        noWrapper
                        src={image}
                      />
                    </div>
                  </Slide>
                )
              })}
            </Slider>
          </Modal>
        </div>
        <Separator />
      </>
    )
  }
}

export default withContext(Other, ThemeContext)
