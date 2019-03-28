import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Shared
import { scrollToContent } from '../../shared/scrollToContent'
// CSS
import classes from './Parallax.module.css'
// JSX
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import SlideDown from './SlideDown/SlideDown'
import Logo from '../../components/UI/Logo/Logo'
import ImageFadeIn from '../../components/UI/ImageFadeIn/ImageFadeIn'

class parallax extends Component {
  static propTypes = {
    socialMediaButtons: PropTypes.any,
    children: PropTypes.any,
    isMobile: PropTypes.bool,
    image: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.parallaxContent = React.createRef()
  }

  render () {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Container}>
          <div className={classes.Background}>
            <ImageFadeIn style={{ position: 'absolute' }} draggable='false' src={this.props.image} />
          </div>
          <div className={classes.Overlay}>
            <div className={classes.Content}>
              <Logo />
              <IntroHeader>Robert Molina</IntroHeader>
              <div>
                {this.props.socialMediaButtons}
              </div>
              <div className={classes.Motto}>'Quality means doing it right, even when no one is looking.'</div>
            </div>
          </div>
          <SlideDown scrollOnClick={() => scrollToContent(this.parallaxContent.current.offsetTop, this.props.isMobile)} />
        </div>
        <main className={classes.Children} ref={this.parallaxContent}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.mobileReducer.isMobile
  }
}

export default connect(mapStateToProps)(parallax)
