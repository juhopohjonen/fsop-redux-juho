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

export const setNotification = (notification, displayTime) => {

    return async dispatch => {
        dispatch(changeNotification(notification))
        const displayTimeInMilliSeconds = displayTime * 1000

        console.log('setting notif...')
    
        setTimeout(() => {
            console.log('unsetting')
            dispatch(changeNotification(''))
        }, displayTimeInMilliSeconds)
    }
    

}

export const { changeNotification } = notificationSlice.actions
export default notificationSlice.reducer