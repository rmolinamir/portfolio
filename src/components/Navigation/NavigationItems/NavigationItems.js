import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
// CSS
import classes from './NavigationItems.module.css'
// JSX
import NavigationItem from './NagivationItem/NagivationItem'
import Separator from './Separator/Separator'
// Logo
import desktopLogo from '../../../assets/svg/personal-logo.svg'
import logo from '../../../assets/images/Robert-Molina.png'

const renderNavigationItems = (props) => {
	switch (props.navbarType) {
		case 'TransparentNavbar':
			return (
				<>
					{props.width < 1121 ? 
						null : 
						<>
							<div className={classes.Spacing} />
							<Separator />
							<NavigationItem {...props} link='/projects' color='white'>
								Projects
							</NavigationItem>
							<NavigationItem {...props} link='/skills' color='white'>
								Skills
							</NavigationItem>
							<NavigationItem {...props} link='/psd-designs' color='white'>
								Designs
							</NavigationItem>
							<Separator />
						</>
					}
				</>
			)
		case 'MobileDrawer':
			return (
				<>
					<div className={classes.MobileLogo}>
						<img src={logo} draggable='false' alt='' />
					</div>
					<Separator />
					<NavigationItem {...props} link='/'>
						About Me
					</NavigationItem>
					<Separator />
					<NavigationItem {...props} link='/projects'>
						Projects
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
						Email Me
					</a>
				</>
			)
		default:
			return (
				<>
					{props.width < 1121 ? 
						null
						: (
							<>
								<div className={classes.Spacing} />
								<NavigationItem {...props} link='/'>
									About Me
								</NavigationItem>
								<NavigationItem {...props} link='/projects'>
									Projects
								</NavigationItem>
								<NavigationItem {...props} link='/skills'>
									Skills
								</NavigationItem>
								<NavigationItem {...props} link='/psd-designs'>
									Designs
								</NavigationItem>
							</>
						)
					}
				</>
			)
	}
}

const nagivationItems = (props) => {
  return (
    <>
      <ul className={classes.NavigationItems}>
        <div className={classes.SpacingSmall} />
        <NavLink className={[classes.NavbarLogo, classes.DesktopOnly].join(' ')} to='/'>
          <img src={desktopLogo} draggable='false' alt='' />
        </NavLink>
        {renderNavigationItems(props)}
      </ul>
    </>
  )
}

export default withRouter(nagivationItems)
