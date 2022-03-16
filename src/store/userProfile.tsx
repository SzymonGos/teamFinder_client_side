import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'

interface User {
  user: { userID: number | null; username: string; useremail: string }
}

const initialState: User = {
  user: {
    userID: null,
    username: '',
    useremail: '',
  },
}

const store = createState(initialState)

export function useStore() {
  const withState = useState(store)
  withState.attach(Persistence('user'))

  return {
    get state() {
      return withState.get()
    },

    getUserData(id: number, name: string, email: string) {
      store.user.set({
        userID: id,
        username: name,
        useremail: email,
      })
    },

    signOut(){
      store.user.set({
        userID: null,
        username: '',
        useremail: ''
      })
    }
  }
}
