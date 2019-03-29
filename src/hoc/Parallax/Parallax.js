import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isMobile } from '../../shared/isMobile'
// Shared
import { scrollToContent } from '../../shared/scrollToContent'
// CSS
import classes from './Parallax.module.css'
// JSX
import Particles from 'react-particles-js'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import SlideDown from './SlideDown/SlideDown'
import Logo from '../../components/UI/Logo/Logo'
import ImageFadeIn from '../../components/UI/ImageFadeIn/ImageFadeIn'

class parallax extends Component {
  static propTypes = {
    socialMediaButtons: PropTypes.any,
    children: PropTypes.any,
    image: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.isMobile = isMobile()
    this.parallaxContent = React.createRef()
  }

  render () {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Container}>
          <div className={classes.Background}>
            <Particles
              className={classes.Particles}
              canvasClassName={classes.Canvas}
              params={{
                'particles': {
                  'number': {
                    'value': this.isMobile ? 120 : 240,
                    'density': {
                      'enable': true
                    }
                  },
                  'size': {
                    'value': 4,
                    'random': true,
                    'anim': {
                      'speed': 4,
                      'size_min': 0.6
                    }
                  },
                  'line_linked': {
                    'enable': false
                  },
                  'move': {
                    'random': true,
                    'speed': 2,
                    'direction': 'top',
                    'out_mode': 'out'
                  }
                },
                'interactivity': {
                  'modes': {
                    'bubble': {
                      'distance': 250,
                      'duration': 2,
                      'size': 0,
                      'opacity': 0
                    },
                    'repulse': {
                      'distance': 600,
                      'duration': 6
                    }
                  }
                } }} />
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
          <SlideDown scrollOnClick={() => scrollToContent(this.parallaxContent.current.offsetTop - 70)} />
        </div>
        <main className={classes.Children} ref={this.parallaxContent}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default parallax
