import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import setSeconds from 'date-fns/setSeconds'
import { API_URL } from '../config/config'
import PATH from '../services/paths'

const CreateGameContext = React.createContext<States>(null!)
const CreateGameUpdateContext = React.createContext<Handlers>(null!)

export function useCreateGame() {
  return useContext(CreateGameContext)
}

export function useCreateGameUpdate() {
  return useContext(CreateGameUpdateContext)
}
interface Handlers {
  handleGetVenues(e: any): Promise<void>
  handleSubmit(e: any): Promise<void>
  onInputChange(e: any): void
  getExcludedTimes(e: any): void
  handleNumbers(e: any): void
  inputValidation(e: any): void
  setSportDisciplineNameFunc(e: any): void
  setVenueAddressFunc(e: any): void
  setVenueIdFunc(e: any): void
  setVenueBusyTermsFunc(e: any): void
  setStartDateFunc(date: Date): void
  setDurationFunc(e: any): void
  setDateTimeFunc(): void
}
interface States {
  venueAddress: string
  venues: any[]
  venueBusyTerms: any[]
  startDate: Date
  excludedTimes: any
  createGameError: string
  venueError: string
  inputErrors: {
    name: string
    description: string
    amountOfPlayers: string
    venueId: string
    price: string
    duration: string
  }
  newGameInputs: NewGame
}

interface NewGame {
  name: string
  description: string
  sportDisciplineName: string
  amountOfPlayers: number
  venueId: number | null
  price: number
  duration: number | null
  date: string
  hour: number | null
}

export function CreateGameProvider({ children }: any) {
  const history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies()
  const [venueAddress, setVenueAddress] = useState('')
  const [venues, setVenues] = useState<any[]>([])
  const [venueBusyTerms, setVenueBusyTerms] = useState<any[]>([])
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 12))
  const [excludedTimes, setExcludedTimes] = useState<any>([])
  const [createGameError, setCreateGameError] = useState('')
  const [venueError, setVenueError] = useState('')
  const [inputErrors, setInputErrors] = useState({
    name: '',
    description: '',
    amountOfPlayers: '',
    venueId: '',
    price: '',
    duration: '',
  })
  const [newGameInputs, setNewGameInputs] = useState<NewGame>({
    name: '',
    description: '',
    sportDisciplineName: 'football',
    amountOfPlayers: 0,
    venueId: null,
    price: 0,
    duration: 60,
    date: '',
    hour: null,
  })

  const setSportDisciplineNameFunc = (e: any) => {
    setNewGameInputs({ ...newGameInputs, sportDisciplineName: e.target.value })
  }
  const setVenueIdFunc = (e: any) => {
    setNewGameInputs({ ...newGameInputs, venueId: parseInt(e.target.value.slice(0, 1)) })
  }
  const setVenueAddressFunc = (e: any) => {
    setVenueAddress(e.target.value)
  }
  const setVenueBusyTermsFunc = (e: any) => {
    setVenueBusyTerms(e.target.value.split(',').slice(2))
  }
  const setStartDateFunc = (date: Date) => {
    setStartDate(date)
    
  }
  const setDateTimeFunc = () => {
    setNewGameInputs({
      ...newGameInputs,
      date: startDate.toLocaleDateString('en-GB'),
      hour: parseInt(startDate.toTimeString().slice(0, 2)),
    })
  }
  const setDurationFunc = (e: any) => {
    setNewGameInputs({ ...newGameInputs, duration: parseInt(e.target.value) })
  }

  const handleGetVenues = async (e: any) => {
    venues.filter((item) => item.id == newGameInputs.venueId).map((e) => setVenueBusyTerms(e.busyTerms))
    e.preventDefault()
    const config = {
      headers: { Authorization: `Bearer ${cookies?.token}` },
    }
    try {
      const resp = await axios.get(
        `${API_URL}/venues?address=${venueAddress}&sportDiscipline=${newGameInputs.sportDisciplineName}`,
        config,
      )
      setVenues(resp.data)
      setVenueError('')
    } catch (e: any) {
      setVenueError(e.response.data.message)
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setCreateGameError('')
    const config = {
      headers: { Authorization: `Bearer ${cookies?.token}` },
    }
    try {
      const resp = await axios.post(`${API_URL}/games`, newGameInputs, config)
      if (resp.status === 201) {
        alert('Thank you! Your game has been created.')
        history.push(PATH.USER)
      }
    } catch (e: any) {
      setCreateGameError(e.response.data.message)
    }
  }

  const onInputChange = (e: any) => {
    e.preventDefault()
    const { name, value } = e.target as HTMLInputElement
    setNewGameInputs({ ...newGameInputs, [name]: value.trimStart() })
    inputValidation(e)
  }

  const inputValidation = (e: any) => {
    let { name, value } = e.target as HTMLInputElement

    setInputErrors((prev) => {
      const validateInput = { ...prev, [name]: '' }
      switch (name) {
        case 'name':
          if (!value) {
            validateInput[name] = 'Please enter title.'
          }
          break
        case 'description':
          if (!value) {
            validateInput[name] = 'Please provide description text.'
          }
          break
        case 'amountOfPlayers':
          if (!value || parseInt(value) < 2) {
            validateInput[name] = 'Min. 2 players'
          }
          break
        case 'price':
          if (!value) {
            validateInput[name] = 'Price is required'
          } else if (parseInt(value) > 100) {
            validateInput[name] = 'Price cannot be higher than 100'
          }
          break
      }
      return validateInput
    })
  }

  const getExcludedTimes = (date: Date) => {
    setExcludedTimes(
      venueBusyTerms
        .filter((x) => x.replace(/T.*/, '').split('-').reverse().join('/') == date.toLocaleDateString('en-GB'))
        .map((e) =>
          setHours(setMinutes(setSeconds(new Date(), 0), 0), e.replace(/.*T/, '').split('').join('').slice(0, 2)),
        ),
    )
  }

  const handleNumbers = (e: any) => {
    e.target.name === 'price'
      ? isNaN(e.target.value) || e.target.value === ''
        ? setNewGameInputs({ ...newGameInputs, price: 0 })
        : setNewGameInputs({ ...newGameInputs, price: parseInt(e.target.value) })
      : e.target.name === 'amountOfPlayers'
      ? isNaN(e.target.value) || e.target.value === ''
        ? setNewGameInputs({ ...newGameInputs, amountOfPlayers: 0 })
        : setNewGameInputs({ ...newGameInputs, amountOfPlayers: parseInt(e.target.value) })
      : null
  }

  useEffect(() => {
    if (venues.length == 0) {
      setNewGameInputs({ ...newGameInputs, venueId: null })
    }
  }, [venues])

  return (
    <CreateGameContext.Provider
      value={{
        venueAddress,
        venues,
        venueBusyTerms,
        startDate,
        excludedTimes,
        createGameError,
        venueError,
        inputErrors,
        newGameInputs,
      }}
    >
      <CreateGameUpdateContext.Provider
        value={{
          handleGetVenues,
          handleSubmit,
          onInputChange,
          getExcludedTimes,
          handleNumbers,
          inputValidation,
          setSportDisciplineNameFunc,
          setVenueAddressFunc,
          setVenueIdFunc,
          setVenueBusyTermsFunc,
          setStartDateFunc,
          setDurationFunc,
          setDateTimeFunc,
        }}
      >
        {children}
      </CreateGameUpdateContext.Provider>
    </CreateGameContext.Provider>
  )
}
