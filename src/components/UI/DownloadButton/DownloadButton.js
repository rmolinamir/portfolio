import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './DownloadButton.module.css'

const downloadButton = (props) => {
  return (
    <div>
      <div className={classes.Wrapper}>
        <a className={classes.Button} href={props.href} target='_blank' rel='noopener noreferrer'>
          <div className={classes.Content}>
            <div className={classes.Circle}>
              <span className={classes.Icon} />
            </div>
          </div>
          <p className={classes.Text}>{props.children ? props.children : 'Download'}</p>
        </a>
      </div>
    </div>
  )
}

downloadButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
}

export default downloadButton
