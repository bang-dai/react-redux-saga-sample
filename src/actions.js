export const GET_USERS_FETCH = 'GET_USERS_FETCH'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const getUsersFetch = () => {
    return {
        type: GET_USERS_FETCH
    }
}

export const updateUser = (id) => {
    return {
        type: UPDATE_USER,
        payload: id
    }
}