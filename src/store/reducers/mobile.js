import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';

const initialState = {
    isMobile: null
}

const mobileReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MOBILE_CHECK_REDUCER:
            console.log('')
            return updateObject(state, {isMobile: action.isMobile});
    default: 
        // do nothing
    }
    return state
}

export default mobileReducer;