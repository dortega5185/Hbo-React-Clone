import React, { useContext, useState } from 'react'

export const StateContext = React.createContext()

export function useStateContext() {
  return useContext(StateContext)
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState('')
  const defaultUserImage = '/img/man1.jpg'

  const createUserAction = (e) => {
    setUser(e.target.value)
    console.log(user)
  }

  const [sideNavOpen, setSideNavOpenAction] = useState(false)
  const [accountModalOpen, setAccountModalOpenAction] = useState(false)
  const [searchOpen, setSearchOpenAction] = useState(false)

  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImage,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        setAccountModalOpenAction,
        searchOpen,
        setSearchOpenAction,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
