import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
// CSS
import classes from './Layout.module.css'
// JSX
import Navbar from '../../containers/Navbar/Navbar'
import Footer from '../../components/UI/Footer/Footer'
import ScrollToTopButton from '../../components/UI/ScrollToTopButton/ScrollToTopButton'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
  }

  constructor(props) {
    super(props)
    const localStorageTheme = window.localStorage.getItem('theme')
    let theme
    /**
     * Checking local storage to see if a theme was pre-set.
     */
    if (localStorageTheme) {
      switch (localStorageTheme) {
        case 'dark':
          theme = classes.DarkTheme
          break
        case 'light':
          theme = classes.LightTheme
          break
        default:
          // do nothing
      }
    /**
     * Default theme is dark, we set the local storage theme as dark as well.
     */
    } else {
      window.localStorage.setItem('theme', 'dark')
      theme = classes.DarkTheme
    }
    this.state = {
      showScrollToTop: false,
      theme: theme
    }
  }

  changeNavbarOnWindowScroll = () => {
    if (window.scrollY < window.screen.height / 2) {
      this.setState({
        showScrollToTop: false
      })
    } else {
      this.setState({
        showScrollToTop: true
      })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.changeNavbarOnWindowScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeNavbarOnWindowScroll)
  }

  render () {
    // The landing page has a parallax, so the footer is inside the parallax and this one has to be rendered null.
    // Otherwise, render this footer.
    const footer = this.props.location.pathname !== '/' && <Footer />
    return (
      <div className={[
        classes.Wrapper,
        this.state.theme
      ].join(' ')}>
        <Navbar />
        <main className={classes.Container}>
          {this.props.children}
        </main>
        {this.state.showScrollToTop ? <ScrollToTopButton /> : null}
        {footer}
      </div>
    )
  }
}

export default withRouter(Layout)
