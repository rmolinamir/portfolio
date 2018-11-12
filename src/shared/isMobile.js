import smoothscroll from 'smoothscroll-polyfill';

export const isMobile = () => {
    let isMobile = false;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        smoothscroll.polyfill();
        isMobile = true;
    }
    return isMobile;
}