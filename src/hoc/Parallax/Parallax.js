import React, { Component } from 'react';
import { connect } from 'react-redux';

import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';

import SlideDown from './SlideDown/SlideDown';
import Logo from '../../components/UI/Logo/Logo';

import classes from './Parallax.module.css';

import { scrollToContent } from '../../shared/scrollToContent';

class parallax extends Component {

    constructor(props) {
        super(props);
        this.parallaxContent = React.createRef();
    }

    render () {
        const parallaxBackground = {         
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            backgroundImage: `url(${this.props.image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: '-1'
        }
        return (
            <div className={classes.Parallax}>
                <div style={parallaxBackground}>
                    <div className={classes.ParallaxOverlay}>
                        <div className={classes.ParallaxContent}>
                            <Logo />
                            <IntroHeader>Robert Molina</IntroHeader>
                            {this.props.socialMediaButtons}
                            <div className={classes.ParallaxMotto}>"Quality means doing it right, even when no one is looking."</div>
                        </div>
                    </div>
                    <SlideDown scrollOnClick={() => scrollToContent(this.parallaxContent.current.offsetTop, this.props.isMobile)} />
                </div>
                <main className={classes.ParallaxChildren} ref={this.parallaxContent}>  
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.mobileReducer.isMobile
    }
}

export default connect(mapStateToProps)(parallax);