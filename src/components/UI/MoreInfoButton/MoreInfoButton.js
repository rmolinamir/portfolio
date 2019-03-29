import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './MoreInfoButton.module.css'

const moreInfoButton = (props) => {
  let moreInfoClasses = [classes.Container]
  if (props.noHover) { moreInfoClasses.push(classes.NoHover) }
  return (
    <div
      style={{
        width: props.width,
        height: props.height
      }}
      className={moreInfoClasses.join(' ')}>
      <a href={props.to} onClick={props.click}>
        <svg viewBox='0 0 640 640'>
          <path fill='#FFF' d='M320.5 59.5c-144.146 0-261 116.854-261 261s116.854 261 261 261s261-116.854 261-261 S464.646 59.5 320.5 59.5z M320.5 566.892c-136.078 0-246.392-110.313-246.392-246.392S184.422 74.1 320.5 74.1 S566.892 184.4 566.9 320.5S456.578 566.9 320.5 566.892z' />
          <path fill='#FFF' d='M334.563 205.27c16.286 0 28.17-15.406 28.17-31.252c0-9.684-5.723-16.286-17.166-16.286 c-14.966 0-26.85 14.085-26.85 30.812C318.717 196.9 324.4 205.3 334.6 205.27z' />
          <path fill='#FFF' d='M346.888 414.344c-4.841 7.925-12.324 18.048-22.888 18.048c-5.283 0-10.124-3.962-10.124-12.323 c0-3.963 1.761-11.445 3.082-17.168l22.889-100.796c2.2-8.363 5.28-21.127 5.28-25.969c0-13.205-9.682-24.209-25.089-24.209 c-23.769 0-50.618 33.453-59.421 48.858l-1.761 3.081l9.684 7.043c7.922-12.325 22.007-32.572 34.332-32.572 c5.282 0 7 4.8 7 8.803c0 3.081-2.201 12.325-4.402 21.127l-21.128 93.314c-2.64 11.004-3.961 18.046-3.961 27.7 c0 17.2 10.1 29.5 25.1 29.491c28.61 0 48.417-33.013 59.421-51.499l-10.125-5.722L346.888 414.344z' />
        </svg>
      </a>
    </div>
  )
}

moreInfoButton.propTypes = {
  noHover: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  to: PropTypes.string,
  click: PropTypes.func
}

export default moreInfoButton
