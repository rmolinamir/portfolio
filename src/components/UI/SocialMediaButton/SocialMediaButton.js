import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SocialMediaButton.module.css'
// JSX
import { Icon } from 'react-svg-library'

const socialMediaButton = (props) => {
  return (
    <a
      href={props.href}
      target={props.targetBlank ? '_blank' : 'false'}
      rel={props.targetBlank ? 'noopener noreferrer' : 'false'}>
      <div className={classes.SocialMediaButton}>
        <Icon size={'100%'} icon={props.icon} />
      </div>
    </a>
  )
}

socialMediaButton.propTypes = {
  href: PropTypes.string,
  targetBlank: PropTypes.bool,
  icon: PropTypes.string
}

export default socialMediaButton
