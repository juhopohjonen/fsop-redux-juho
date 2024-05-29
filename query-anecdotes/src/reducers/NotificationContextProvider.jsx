import { createContext, useContext, useReducer } from "react"
export const NotificationContext = createContext()

const notificationReducer = (state, action) => {

    console.log('ACTION', action)

    switch (action.type) {
        case "CHANGE":
            return action.payload
        case "RESET":
            return ''
        default:
            return state
    }
}

const NotificationContextProvider = ({ children }) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
    console.log('notification: ', notification)

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => useContext(NotificationContext)[0]
export const useNotificationDispatch = () => useContext(NotificationContext)[1]


export default NotificationContextProvider