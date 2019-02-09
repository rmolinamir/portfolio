import * as actionTypes from './actionTypes';
// Worker function
import { isMobile } from '../../shared/isMobile';
// Polyfill
import smoothscroll from 'smoothscroll-polyfill';

// Applies smoothscroll polyfill if on a mobile device.
if (isMobile()) {
    smoothscroll.polyfill();
}

export const mobileActions = {
    mobileCheck: () => {
        return {
            type: actionTypes.MOBILE_CHECK_REDUCER,
            isMobile: isMobile()
        }
    }
}

export const mobileCreators = {
    mobileCheckInit: () => {
        return {
            type: actionTypes.MOBILE_SAGA_INIT
        }
    }
}
