

import * as actionTypes from './actionTypes';


export const changeTitle = (title) => {
    return {
        type: actionTypes.CHANGE_TITLE,
        title,
    };
};

export const getInfo = (name) => {
    return {
        type: actionTypes.GET_INFOR,
        name,
    };
}

export const getInforSuccess = (data) => {
    return {
        type: actionTypes.GET_INFOR_SUCCESS,
        data,
    };
}

export const getInforFailed = () => {
    return {
        type: actionTypes.GET_INFOR_FAILED,
    };
}