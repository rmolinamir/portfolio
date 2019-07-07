import React, { useMemo, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { isMobile as getIsMobile } from '../../shared/isMobile'
// Shared
import { scrollToContent } from '../../shared/scrollToContent'
import { ThemeContext } from '../Layout/ThemeContext/ThemeContext'
// CSS
import classes from './Parallax.module.css'
// JSX
import Particles from 'react-particles-js'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import SlideDown from './SlideDown/SlideDown'
import Logo from '../../components/UI/Logo/Logo'
import ImageFadeIn from '../../components/UI/ImageFadeIn/ImageFadeIn'

const Parallax = props => {
  const { theme } = useContext(ThemeContext)
  const overlayColor = theme === 'light' ? 'rgba(255,255,255,0.66)' : 'rgba(0,0,0,0.66)'
  const isMobile = useMemo(() => getIsMobile(), [])
  const parallaxContent = useRef()

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
                  'value': isMobile ? 120 : 240,
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
          <ImageFadeIn style={{ position: 'absolute' }} draggable='false' src={props.image} />
        </div>
        <div
          className={classes.Overlay}
          style={{
            backgroundColor: overlayColor
          }}
        >
          <div className={classes.Content}>
            <Logo />
            <IntroHeader>Robert Molina</IntroHeader>
            {/* <div>
              {props.socialMediaButtons}
            </div> */}
            <div className={classes.Motto}>'Quality means doing it right, even when no one is looking.'</div>
          </div>
        </div>
        <SlideDown scrollOnClick={() => scrollToContent(parallaxContent.current.offsetTop - 70)} />
      </div>
      <main className={classes.Children} ref={parallaxContent}>
        {props.children}
      </main>
    </div>
  )
}

Parallax.propTypes = {
  // socialMediaButtons: PropTypes.any,
  children: PropTypes.any,
  image: PropTypes.string
}

export default Parallax
