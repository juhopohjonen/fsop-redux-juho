import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        changeNotification(state, action) {
            return action.payload
        }
    }
})

export const notificationCreator = (newNotification) => {

    return {
        type: 'notification/changeNotification',
        payload: newNotification
    }
}

export default notificationSlice.reducer