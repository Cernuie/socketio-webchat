import React, {useContext, useEffect, useState} from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ id, children}) {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io('http://localhost:5000', { 
          query: {id},
          withCredentials: true,
          extraHeaders: {
            "webchat-header" : "sending"
          }
        })
        setSocket(newSocket)
        return () => newSocket.close()
    }, [id])
  return (
    <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
  )
}

SocketProvider.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}
