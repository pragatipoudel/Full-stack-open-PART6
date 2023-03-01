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
export default notificationSlice.reducer