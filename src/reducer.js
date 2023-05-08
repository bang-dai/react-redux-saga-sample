import { GET_USERS_SUCCESS, UPDATE_USER_SUCCESS } from "./actions"

const myFirstReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.users }
        case UPDATE_USER_SUCCESS:
            console.log('users successfully updated: ' + action.id)
            return state
        default:
            return state
    }
}

export default myFirstReducer