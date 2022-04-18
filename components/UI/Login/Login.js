import Head from 'next/head'
import { useStateContext } from '../../HBOProvider'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ls from 'local-storage'
import { useMounted } from '../../Hooks/useMounted'

const Login = () => {
  const globalState = useStateContext()
  const router = useRouter()
  const [loadingUsers, setLoadingUsers] = useState(false)
  let { hasMounted } = useMounted()

  let users = ls('users') !== null ? ls('users') : []

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false)
    }
  }, [])

  console.log('declared users', users)
  const selectUser = (id) => {
    ls('activeUID', id)
    router.push('/')
  }

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className='login-user__user-box'
            key={user.id}
          >
            <img
              src='/img/man1.jpg'
              alt='Picture of random person'
              className='login-user__user-img'
            />
            <div className='login-user__user-name'>{user.user}</div>
          </div>
        )
      })
    }
  }

  const createUser = () => {
    router.push('/')
  }

  return (
    <div className='login-user'>
      <div className='login-user__top'>
        <div className='login-user__logo' />
        <span className='login-user__title'>Who Is Watching?</span>
      </div>
      <div className='login-user__form'>{hasMounted ? showUsers() : ''}</div>
      <div className='login-user__buttons'>
        <button className='login-user__kid' onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  )
}

export default Login
