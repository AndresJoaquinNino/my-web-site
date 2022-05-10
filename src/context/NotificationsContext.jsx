import { createContext, useState } from "react";

export const NotificationsContext = createContext()

export const NotificationsProvider = ({ children }) => {

    const [notifications, setNotifications] = useState([])

    const addNotification = (newNotification) => {
        setNotifications([...notifications, newNotification])
    }

    const deleteNotification = (item) => {
        notifications.splice(notifications.findIndex(index => index === item), 1)
        setNotifications([...notifications])
    }

    return(
        <NotificationsContext.Provider value={{ notifications, addNotification, deleteNotification }}>
            { children }
        </NotificationsContext.Provider>
    )
}