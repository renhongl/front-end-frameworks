
import * as actionTypes from './actionTypes';

const initState = {
    title: 'Hello World',
    author: 'Pomelo',
    infor: {},
}

export default (state=initState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            }
        case actionTypes.GET_INFOR_SUCCESS:
            return {
                ...state,
                infor: action.data,
            };
        default:
            return state;
    }
}

