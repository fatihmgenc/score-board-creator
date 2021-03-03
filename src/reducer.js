const initialState = {
    playerList: [],
    lapCount: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_PLAYER':

            return {
                ...state,
                playerList: [...state.playerList, action.payload],
            }
        case 'ADD_LAP':

            return {
                ...state,
                lapCount: state.lapCount + 1,
            }
        case 'UPDATE_LAP':

            return {
                ...state,
                lapCount: action.payload,
            }
        case 'REMOVE_PLAYER':
            return {
                ...state,
                playerList: state.playerList.filter(p => p.id !== action.payload)
            }
        case 'UPDATE_PLAYER_SCORE':
            let index = state.playerList.findIndex(p => p.id === action.payload.id)
            const newArray = [...state.playerList];
            newArray[index].scores.push(parseInt(action.payload.score))

            return {
                ...state,
                playerList: newArray,
            }


        default:
            return state
    }
}
export default reducer;
