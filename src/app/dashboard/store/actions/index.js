import { THEME_CHANGE } from "../types";

export const changeTheme = theme => dispatch => {
    console.log(theme);
    dispatch({
        type: THEME_CHANGE,
        payload: theme,
    });
};
