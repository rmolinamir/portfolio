import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
// CSS
import classes from './Layout.module.css'
// JSX
import { WithContext } from 'with-context-react'
import { ThemeContext } from './ThemeContext/ThemeContext'
import Navbar from '../../containers/Navbar/Navbar'
import Footer from '../../components/UI/Footer/Footer'
import ScrollToTopButton from '../../components/UI/ScrollToTopButton/ScrollToTopButton'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
    _context: PropTypes.object,
    location: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      showScrollToTop: false
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
        this.props._context && this.props._context.className
      ].join(' ')}>
        <WithContext context={ThemeContext}>
          <Navbar />
        </WithContext>
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
