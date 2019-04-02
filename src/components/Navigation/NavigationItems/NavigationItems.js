import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
// CSS
import classes from './NavigationItems.module.css'
// JSX
import NavigationItem from './NagivationItem/NagivationItem'
import Separator from './Separator/Separator'
// Logo
import desktopLogo from '../../../assets/svg/personal-logo.svg'
import logo from '../../../assets/images/Robert-Molina.png'

const RenderNavigationItems = React.memo((props) => {
  switch (props.navbarType) {
    case 'MobileDrawer':
      return (
        <>
          <div className={classes.MobileLogo}>
            <img src={logo} draggable='false' alt='' />
          </div>
          <NavigationItem {...props} link='/'>
            About Me
          </NavigationItem>
          <Separator />
          <NavigationItem {...props} link='/projects'>
            Projects
          </NavigationItem>
          <NavigationItem
            {...props}
            exact={false}
            link='/codelab'>
            Code Lab
          </NavigationItem>
          <NavigationItem {...props} link='/skills'>
            Skills
          </NavigationItem>
          <NavigationItem {...props} link='/psd-designs'>
            Designs
          </NavigationItem>
          <Separator />
          <a href='https://github.com/rmolinamir'
            rel='noopener noreferrer'
            target='_blank'
            className={classes.NavLink}>
            Github
          </a>
          <a href='https://www.linkedin.com/in/rmolinamir/'
            rel='noopener noreferrer'
            target='_blank'
            className={classes.NavLink}>
            LinkedIn
          </a>
          <a href='mailto:rmolinamir@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
            className={classes.NavLink}>
            Contact me
          </a>
        </>
      )
    case 'AboutMeNavbar':
    default:
      return (
        <>
          {!(props.width < 1121) &&
            (
              <>
                <div className={classes.Spacing} />
                <NavigationItem {...props} link='/projects'>
                  Projects
                </NavigationItem>
                <NavigationItem
                  {...props}
                  exact={false}
                  link='/codelab'>
                  Code Lab
                </NavigationItem>
                <NavigationItem {...props} link='/skills'>
                  Skills
                </NavigationItem>
                <NavigationItem {...props} link='/psd-designs'>
                  Designs
                </NavigationItem>
                <NavigationItem {...props} link='/'>
                  About Me
                </NavigationItem>
              </>
            )
          }
        </>
      )
  }
})

RenderNavigationItems.propTypes = {
  navbarType: PropTypes.string,
  width: PropTypes.number
}

const nagivationItems = (props) => {
  return (
    <>
      <ul className={classes.NavigationItems}>
        <div className={classes.SpacingSmall} />
        <NavLink className={[classes.NavbarLogo, classes.DesktopOnly].join(' ')} to='/'>
          <img src={desktopLogo} draggable='false' alt='' />
        </NavLink>
        <RenderNavigationItems {...props} />
      </ul>
    </>
  )
}

export default withRouter(React.memo(nagivationItems))
