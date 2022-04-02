import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import PATH from '../services/paths'

interface User {
  user: { userID: number | null; username: string; useremail: string; loggedIn: boolean }
}

const initialState: User = {
  user: {
    userID: null,
    username: '',
    useremail: '',
    loggedIn: false,
  },
}

const store = createState(initialState)

export function useStore() {
  const withState = useState(store)
  withState.attach(Persistence('user'))

  const history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies()

  return {
    get state() {
      return withState.get()
    },

    getUserData(id: number, name: string, email: string) {
      store.user.set({
        userID: id,
        username: name,
        useremail: email,
        loggedIn: true,
      })
    },

    signOut() {
      removeCookie('token')
      store.user.set({
        userID: null,
        username: '',
        useremail: '',
        loggedIn: false,
      })
      history.push(PATH.HOME)
    },
  }
}
