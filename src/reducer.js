import { SET_SEARCH_FIELD, GET_FRIENDS_PENDING, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILED } from './constants'

const initialStateSearch = {
    searchField: ''
}

export const setSearchField = (state=initialStateSearch, action='') => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default: return state
    }
}

const initialStateFriends = {
    friends: [],
    isPending: false,
    error: ''
}

export const requestFriends = (state=initialStateFriends, action='') => {
    switch (action.type) {
        case GET_FRIENDS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case GET_FRIENDS_SUCCESS:
            return Object.assign({}, state, {friends: action.payload, isPending: false})
        case GET_FRIENDS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default: return state
    }
}