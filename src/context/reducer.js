export function reducer(state, action) {
    switch (action.type) {
        case "SET_FEED":
            state.feedList = action.feedList
            return { ...state }

        default:
            return state
    }
}