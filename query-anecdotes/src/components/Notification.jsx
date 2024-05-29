import { useContext } from "react"
import { NotificationContext, useNotificationValue } from "../reducers/NotificationContextProvider"

const Notification = () => {
  const notification = useNotificationValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  console.log('n', notification)

  if (!notification) {
    return <></>
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
