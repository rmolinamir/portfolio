import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Front.module.css'
// JSX
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../../../hoc/Layout/ThemeContext/ThemeContext'
import PackageName from '../../../../components/CodeLab/PackageName/PackageName'
import WavesBackground from '../../../../components/UI/WavesBackground/WavesBackground'

const front = (props) => {
  return (
    <WavesBackground
      className={classes.Wrapper}
      style={{
        backgroundColor: props._context && props._context.theme === 'dark' ? '#202020' : '#FFF'
      }}>
      <PackageName>{props.children}</PackageName>
    </WavesBackground>
  )
}

front.propTypes = {
  children: PropTypes.string.isRequired,
  _context: PropTypes.object
}

export default withContext(React.memo(front), ThemeContext)
