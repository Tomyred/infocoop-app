import { THEME_CHANGE } from "../types";

export const changeTheme = theme => dispatch => {
    dispatch({
        type: THEME_CHANGE,
        payload: theme,
    });
};
