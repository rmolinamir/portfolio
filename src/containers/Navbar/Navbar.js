import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// CSS
import classes from './Navbar.module.css'
// JSX
import ThemeToggler from '../../hoc/Layout/ThemeContext/ThemeToggler/ThemeToggler'
import NagivationItems from '../../components/Navigation/NavigationItems/NavigationItems'
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle'
import MobileDrawer from '../../components/Navigation/MobileDrawer/MobileDrawer'

const NavbarContainer = (props) => {
  return (
    <>
      <nav className={classes.NavbarContainer} onScroll={props.onScroll}>
        <NagivationItems
          width={props.width}
          navbarType={props.navbarType}
          isNavTransparent={props.isNavTransparent} />
        <ThemeToggler />
      </nav>
      {props.width < 1121 &&
      <>
        <DrawerToggle
          isOpen={props.bIsDrawerOpen}
          isNavTransparent={props.isNavTransparent || props.isDrawerTransparent}
          onClick={props.toggleMobileDrawer} />
        <MobileDrawer
          drawerClass={classes.MobileOnly}
          isOpen={props.bIsDrawerOpen}
          onClick={props.toggleMobileDrawer}
          // NavItems props
          isNavTransparent={props.scrollNavTransparent} />
      </>}
    </>
  )
}

NavbarContainer.propTypes = {
  onScroll: PropTypes.func,
  width: PropTypes.number,
  navbarType: PropTypes.string,
  isNavTransparent: PropTypes.bool,
  isDrawerTransparent: PropTypes.bool,
  toggleMobileDrawer: PropTypes.func,
  bIsDrawerOpen: PropTypes.bool,
  scrollNavTransparent: PropTypes.bool
}

class Navbar extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    isMobile: PropTypes.bool,
    _context: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.myNavbar = React.createRef()
    this.state = {
      isMobile: props.isMobile,
      width: window.innerWidth,
      bIsDrawerOpen: false,
      scrollNavTransparent: window.pageYOffset < 50,
      showScrollToTop: false,
      className: classes.LandingNavbar,
      // passing reference from constructor
      navbarType: 'LandingNavbar', // pass navbarType prop to select respective navigation items
      // Scroll Tracking Functionality if dependant on scroll then pass 'this.trackScrolling'
      onScroll: null, // No functionality
      // Passing Is Navbar Transparent functionality, if dependant on scroll then pass 'this.state.scrollNavTransparent'
      // if never transparent then pass false or pass nothing, if always transparent then pass true
      isNavTransparent: true
    }
  }

  /**
   * Toggles (opens/closes) the SideDrawer on click.
   */
  toggleMobileDrawer = () => {
    this.setState((prevState) => {
      return { bIsDrawerOpen: !prevState.bIsDrawerOpen }
    })
  }

  /**
   * Smoothly scrolls to the top, works in mobile with the polyfill.
   */
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Tracks the window scroll then toggles the state scrollNavTransparent
   * depending on the window.scrollY property, if user scrolls further than
   * the .clientHeight property then the scrollNavTransparent state shall be false,
   * otherwise if the navbar is at the top it will be true.
   *
   * With the same functionality, it detects whenever the window.scrollY is less
   * than the total height of the window.screen.height divided by 2 (sensible value,
   * can be changed), meaning whenever the user scrolls halfway down the size of
   * their screen, the showScrollToTop property will toggleand the ScrollToButton
   * component will be shown.
   */
  changeNavbarOnWindowScroll = () => {
    if (!this.myNavbar.current) {
      return
    }
    this.setState({
      scrollNavTransparent: !(window.scrollY > this.myNavbar.current.clientHeight && this.state.isNavTransparent)
    })
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth })
  }

  /**
   * Sets Navbar Settings && Add Event Listener
   */
  componentDidMount () {
    this.setNavbar()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.changeNavbarOnWindowScroll)
  }

  /**
   * Sets Navbar if there is a route change
   */
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setNavbar()
    }
  }

  /**
   * Remove Event Listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.changeNavbarOnWindowScroll)
  }

  /**
   *   Function decides which navbar to display according to the path
   */
  setNavbar = () => {
    let settings = {}
    switch (true) {
      case this.props.location.pathname === '/':
        settings = {
          className: classes.AboutMeNavbar,
          // passing reference from constructor
          navbarType: 'AboutMeNavbar', // pass navbarType prop to select respective navigation items
          // Scroll Tracking Functionality if dependant on scroll then pass 'this.trackScrolling'
          // onScroll: () => {}, // No functionality
          // Passing Is Navbar Transparent functionality, if dependant on scroll then pass 'this.state.scrollNavTransparent'
          // if never transparent then pass false or pass nothing, if always transparent then pass true
          isNavTransparent: true,
          toggleMobileDrawer: this.toggleMobileDrawer
        }
        break
      default:
        // Same as services nabvar, for now it's the default
        settings = {
          className: [classes.Navbar, classes.DefaultNavbar].join(' '),
          navbarType: 'Default', // pass navbarType prop to select respective navigation items
          toggleMobileDrawer: this.toggleMobileDrawer,
          isNavTransparent: false,
          isDrawerTransparent: false
        }
    }
    return this.setState(() => {
      return {
        ...settings
      }
    })
  }

  render () {
    const navbarClasses = [classes.Navbar, this.state.className]
    if (this.state.isNavTransparent && this.state.scrollNavTransparent && !this.state.bIsDrawerOpen) {
      navbarClasses.push(classes.Transparent)
    /**
     * Navbar themes.
     */
    } else if (this.props._context) {
      this.props._context.theme === 'light' ? (
        navbarClasses.push(classes.LightTheme)
      ) : navbarClasses.push(classes.DarkTheme)
    }
    return (
      <header className={navbarClasses.join(' ')} ref={this.myNavbar}>
        <NavbarContainer
          isMobile={this.props.isMobile}
          {...this.state} />
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.mobileReducer.isMobile
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
