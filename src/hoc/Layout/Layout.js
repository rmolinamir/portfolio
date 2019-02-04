import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// CSS
import classes from './Layout.module.css'
// JSX
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton/ScrollToTopButton';

class Layout extends Component {
    state = {
        showScrollToTop: false,
    }

    changeNavbarOnWindowScroll = () => {
        if (window.scrollY < window.screen.height / 2) {
            this.setState({
                showScrollToTop: false
            });
        } else {
            this.setState({
                showScrollToTop: true
            });
        }
    };

    componentDidMount () {
        window.addEventListener('scroll', this.changeNavbarOnWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeNavbarOnWindowScroll);
    }

    render () {
        const footer = this.props.location.pathname === "/projects" || this.props.location.pathname === "/skills" ? <Footer /> : null;
        return (
            <>
                <Navbar />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
                {this.state.showScrollToTop ? <ScrollToTopButton /> : null}
                {footer}
            </>
        );
    }
}

export default withRouter(Layout);
