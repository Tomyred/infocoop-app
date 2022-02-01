const initState = {
    theme: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "THEME_CHANGE":
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
