const initState = {
    data: [],
    entity: {},
    loading: false,
    loaded: false,
    loadingError: false,
    saving: false,
    saved: false,
    savingError: false,
    deleted: false,
    deleting: false,
    deletingError: false
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "RATES_LOAD_INIT":
            return {
                ...state,
                loadingError: false,
                loaded: false,
                loading: true,
                saving: false,
                saved: false,
                savingError: false,
            };
        case "RATES_LOAD_SUCCEED":
            return {
                ...state,
                loading: false,
                loadingError: false,
                loaded: true,
                data: action.payload,
            };
        case "RATES_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "RATE_SAVE_INIT":
            return {
                ...state,
                saving: true,
                saved: false,
                savingError: false,
            };
        case "RATE_SAVE_SUCCEED":
            return {
                ...state,
                loaded: false,
                saving: false,
                saved: true,
                savingError: false,
            };
        case "RATE_SAVE_FAILED":
            return {
                ...state,
                saving: false,
                saved: false,
                savingError: true,
            };
        case "RATE_DELETE_SUCCEED":
            return {
                ...state,
                deleting: false,
                loaded: false,
                deleted: true,
                deletingError: false
            };
        case "RATE_DELETE_FAILED":
            return {
                ...state,
                deleting: false,
                deleted: false,
                deletingError: true
            };
        case "SET_ENTITY_TO_UPDATE":
            return {
                ...state,
                entity: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
