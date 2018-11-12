import * as actionTypes from './actionTypes';

import { isMobile } from '../../shared/isMobile';

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