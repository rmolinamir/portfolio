import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Front.module.css'
// JSX
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../../../hoc/Layout/ThemeContext/ThemeContext'
import PackageName from '../../../../components/CodeLab/PackageName/PackageName'
import WavesBackground from '../../../../components/UI/WavesBackground/WavesBackground'
import BokehBackground from '../../../../components/UI/BokehBackground/BokehBackground'

const browser = (agent => {
  switch (true) {
    case agent.indexOf('edge') > -1:
      return 'edge'
    case agent.indexOf('opr') > -1 && !!window.opr:
      return 'opera'
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      return 'chrome'
    case agent.indexOf('trident') > -1:
      return 'ie'
    case agent.indexOf('firefox') > -1:
      return 'firefox'
    case agent.indexOf('safari') > -1:
      return 'safari'
    default:
      return 'other'
  }
})(window.navigator.userAgent.toLowerCase())

const front = (props) => {
  const children = (
    <BokehBackground
      randomColor
      settings={{
        backgroundSize: 90,
        sizeToBallRatio: 1.2,
        overlayOpacity: props._context && props._context.theme === 'dark' ? 0.33 : 0,
        animationDuration: 12,
        ballOpacity: props._context && props._context.theme === 'dark' ? 0.44 : 0.33,
        randomColor: true,
        randomDelay: true
      }}
      backgroundColor={props._context && props._context.theme === 'dark' ? '#202020' : '#FFF'}>
      <div className={classes.Wrapper}><PackageName>{props.children}</PackageName></div>
    </BokehBackground>
  )

  /**
   * WavesBackground doesn't looks too good on Firefox. So, if of Firefox we will return the children
   * without it.
   */
  return (
    browser !== 'firefox' ? (
      <WavesBackground
        className={classes.Wrapper}
        wavesOpacity={0.33}
        style={{
          backgroundColor: 'transparent'
        }}>
        {children}
      </WavesBackground>
    ) : children
  )
}

front.propTypes = {
  children: PropTypes.string.isRequired,
  _context: PropTypes.object
}

export default withContext(React.memo(front), ThemeContext)
