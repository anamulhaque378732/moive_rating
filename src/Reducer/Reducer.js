


const initialState = {
    cardData: [],
};


const cardReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                cardData: [...state.cardData, action.payload]
            }

        case "REMOVE_FROM_CARD":
            return {
                ...state,
                cardData: state.cardData.filter((item) => item.id !== action.payload.id)
            }

        default:
            return state
    }




};

export { cardReducer, initialState };












