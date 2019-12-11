import { SET_SEARCH_FIELD, GET_FRIENDS_PENDING, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILED } from './constants'

export const setSearchField = (text) => ({
        type: SET_SEARCH_FIELD,
        payload: text
    })

export const requestFriends = (dispatch) => {
    dispatch({type: GET_FRIENDS_PENDING})
    fetch('https://randomuser.me/api/?results=30')
    .then(response => response.json())
    .then(data => dispatch({type: GET_FRIENDS_SUCCESS, payload: data.results}))
    .catch(err => dispatch({type: GET_FRIENDS_FAILED, payload: err}))
}