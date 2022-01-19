import * as types from "../types";
import * as api from "../api";

export const loadRates = () => async dispatch => {
    try {
        dispatch({
            type: types.RATES_LOAD_INIT,
        });

        const res = await api.load();

        if (res.data.error === false) {
            dispatch({
                type: types.RATES_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.RATES_LOAD_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.RATES_LOAD_FAILED,
        });
    }
};

export const saveRate = rate => async dispatch => {
    try {
        dispatch({
            type: types.RATE_SAVE_INIT,
        });

        const res = await api.save(rate);

        if (res.data.error === false) {
            dispatch({
                type: types.RATE_SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.RATE_SAVE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.RATE_SAVE_FAILED,
        });
    }
};

export const setEntityToUpdate = entity => dispatch => {
    dispatch({
        type: types.SET_ENTITY_TO_UPDATE,
        payload: entity
    })
}

export const updateRate = (entity, id) => async dispatch => {

    try {
        dispatch({
            type: types.RATE_SAVE_INIT,
        });

        const res = await api.update(entity, id);

        if (res.data.error === false) {
            dispatch({
                type: types.RATE_SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.RATE_SAVE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.RATE_SAVE_FAILED,
        });
    }
}

export const deleteRate = (id) => async dispatch => {
    
    try {
        dispatch({
            type: types.RATE_DELETE_INIT
        })

        const res = await api.remove(id)
        if(res.data.error === false){
            dispatch({
                type: types.RATE_DELETE_SUCCEED
            })
        }else{
            dispatch({
                type: types.RATE_DELETE_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: types.RATE_DELETE_FAILED
        })
    }
}
