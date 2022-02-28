const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, loading: true };
        case 'DATA_RECEIVED':
            return { ...state, data: action.payload, loading: false }
        default: 
            return state;
    }
};
export default reducer;