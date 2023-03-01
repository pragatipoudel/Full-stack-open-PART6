import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        notificationMessage(state = initialState, action) {
            return action.payload

        }
    }

})

export const { notificationMessage } = notificationSlice.actions

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(notificationMessage(`${message}`))
        setTimeout(() => {
            dispatch(notificationMessage(''))
        }, time * 1000)
    }
}
export default notificationSlice.reducer