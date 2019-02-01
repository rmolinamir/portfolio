import React from 'react';
// CSS
import classes from './ScrollToTopButton.module.css';

/**
 * Smoothly scrolls to the top, works in mobile with the polyfill.
 */
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};

const scrollToTopButton = () => {
    return (
        <div className={classes.ScrollToTopButton} onClick={scrollToTop}><span /></div>
    );
}

export default scrollToTopButton;