import React, { Component } from 'react';

import SlideDown from './SlideDown/SlideDown';
import Logo from '../../components/UI/Logo/Logo';

import classes from './Parallax.module.css';

class parallax extends Component {

    constructor(props) {
        super(props);
        this.parallaxContent = React.createRef();
    }

    scrollToContent = () => {
        window.scrollTo({
            top: this.parallaxContent.current.offsetTop - 56,
            left: 0,
            behavior: 'smooth'
        });
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
                            <div className={classes.ParallaxIntro}>Robert Molina</div>
                            {this.props.socialMediaButtons}
                            <div className={classes.ParallaxMotto}>"Quality means doing it right, even when no one is looking."</div>
                        </div>
                    </div>
                    <SlideDown scrollOnClick={this.scrollToContent} />
                </div>
                <main className={classes.ParallaxChildren} ref={this.parallaxContent}>  
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default parallax;