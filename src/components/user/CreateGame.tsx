import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import 'react-datepicker/dist/react-datepicker.css'
import Container from '../Container'
import API_URL from '../../config/config'

const disciplineOptions = [
  { label: 'Football', value: 'football' },
  { label: 'Basketball', value: 'basketball' },
  { label: 'Volleyball', value: 'volleyball' },
  { label: 'Tennis', value: 'tennis' },
]

const durationInputs = [
  { id: 1, name: '60', value: 60 },
  { id: 2, name: '120', value: 120 },
]

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
export default function User() {
  const [cookies, setCookie, removeCookie] = useCookies()
  const [venueAddress, setVenueAddress] = useState('')
  const [venues, setVenues] = useState<any[]>([])
  const [venueError, setVenueError] = useState('')
  const [venueBusyTerms, setVenueBusyTerms] = useState<any[]>([])
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 12))

  const [newGameInputs, setNewGameInputs] = useState<NewGame>({
    name: '',
    description: '',
    sportDisciplineName: 'football',
    amountOfPlayers: 2,
    venueId: null,
    price: 0,
    duration: 60,
    date: '',
    hour: null,
  })
  // console.log('__terms: ', venueBusyTerms)
  console.log(newGameInputs)

  // console.log('__datePicked: ', startDate);
  // console.log('__onlyDate: ', startDate.toLocaleDateString());
  // console.log('__onlyTime: ', startDate.toTimeString().slice(0,2));

  // localdate splitting test
  // const time = '2022-02-23T17:00:00'
  // console.log(time.replace(/T.*/,'').split('-').reverse().join('/'));
  // console.log(time.replace(/.*T/,'').split('').join('').slice(0,2));

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

  const onInputChange = (e: any) => {
    e.preventDefault()
    const { name, value } = e.target as HTMLInputElement
    setNewGameInputs({ ...newGameInputs, [name]: value.trimStart() })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const config = {
      headers: { Authorization: `Bearer ${cookies?.token}` }      
    }
    try {
      const resp = await axios.post(`${API_URL}/games`, newGameInputs, config)
      if (resp.status === 201){
        alert('Thank you! Your game has been created :)')
        setNewGameInputs({
          name: '',
          description: '',
          sportDisciplineName: 'football',
          amountOfPlayers: 2,
          venueId: null,
          price: 0,
          duration: 60,
          date: '',
          hour: null,
        })
      }
    } catch (e: any) {
      console.error(e.response.data.message)
    }
  }

  useEffect(() => {
    if (venues.length == 0) {
      setNewGameInputs({ ...newGameInputs, venueId: null })
    }
  }, [venues])

  return (
    <Container className='px-0 sm:px-0'>
      <div className='col-span-full md:col-span-6 md:col-start-1 flex flex-col border-2 p-6 gap-y-10'>
        <form className='flex flex-col gap-y-5' onSubmit={handleGetVenues}>
          <div className='flex flex-col w-fit'>
            <label>Select Discipline</label>
            <select onChange={(e) => setNewGameInputs({ ...newGameInputs, sportDisciplineName: e.target.value })}>
              <option value='' hidden>
                Choose discipline
              </option>
              {disciplineOptions.map((e, i) => (
                <option key={i} value={e.value}>
                  {e.label}
                </option>
              ))}
            </select>
          </div>
          <label>Select a venue</label>
          <input
            type='text'
            placeholder='Enter address'
            value={venueAddress}
            onChange={(e) => setVenueAddress(e.target.value)}
            required
          />
          {venues.length > 0 && (
            <select
              defaultValue='default'
              onChange={(e) => {
                setNewGameInputs({ ...newGameInputs, venueId: parseInt(e.target.value.slice(0, 1)) })
                setVenueBusyTerms(e.target.value.split(',').slice(2))
              }}
            >
              <option value='' hidden>
                Choose your venue
              </option>
              {venues.map((e, i) => {
                return (
                  <option value={[e.id, e.busyTerms]} key={i}>
                    {e.name} - {e.address}
                  </option>
                )
              })}
            </select>
          )}
          <div>Missing your venue? Contact our support team</div>
          <div className='flex justify-center mt-2'>{venueError && venueError}</div>
          <button type='submit' className='border-2 rounded-[8px] py-2 px-4'>
            select venues
          </button>
        </form>
      </div>

      <form
        className='col-span-full mt-12 my-12 md:col-span-6 md:col-start-1 flex flex-col gap-y-7'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label>title</label>
          <input
            type='text'
            name='name'
            value={newGameInputs.name}
            onChange={(e) => onInputChange(e)}
            required
            placeholder='add title'
          />
        </div>
        <div className='flex flex-col'>
          <label>Description</label>
          <textarea
            name='description'
            value={newGameInputs.description}
            onChange={(e) => onInputChange(e)}
            maxLength={250}
          />
        </div>
        <div className='flex flex-row gap-x-6'>
          <div className='flex gap-x-4 items-center'>
            <label>Number of players</label>
            <input
              type='number'
              min={2}
              max={30}
              name='amountOfPlayers'
              value={newGameInputs.amountOfPlayers}
              onChange={(e) => setNewGameInputs({ ...newGameInputs, amountOfPlayers: parseInt(e.target.value) })}
              className='w-fit'
            />
          </div>
          <div className='flex gap-x-4 items-center'>
            <label>Price / Person</label>
            <input
              type='number'
              min={0}
              name='price'
              value={newGameInputs.price}
              onChange={(e) => setNewGameInputs({ ...newGameInputs, price: parseInt(e.target.value) })}
              className='w-fit'
            />
          </div>
        </div>
        <div className='flex gap-x-4 items-center'>
          <div>
            <DatePicker
              selected={startDate}
              showTimeSelect
              onChange={(date: Date) => {
                setStartDate(date)
                setNewGameInputs({
                  ...newGameInputs,
                  date: startDate.toLocaleDateString(),
                  hour: parseInt(startDate.toTimeString().slice(0, 2)),
                })
              }}
              excludeTimes={[
                setHours(setMinutes(new Date(), 0), 17),
              ]}
              timeIntervals={60}
              timeFormat='HH:mm'
              dateFormat='dd/MM/yyyy HH:mm'
            />
          </div>
        </div>
        <div className='flex flex-row gap-x-10'>
          <label>Game Duration</label>
          {durationInputs.map((e) => {
            return (
              <div key={e.id} className='flex gap-x-4 items-center'>
                <input
                  className='cursor-pointer'
                  type='radio'
                  id={e.name}
                  name={e.name}
                  checked={newGameInputs.duration === e.value}
                  value={e.value}
                  onChange={(e) => setNewGameInputs({ ...newGameInputs, duration: parseInt(e.target.value) })}
                />
                <label className='cursor-pointer' htmlFor={e.name}>
                  {e.name}
                </label>
              </div>
            )
          })}
        </div>
        <button type='submit' className='border-2 rounded-[8px] py-2 px-4'>
          Create a Game
        </button>
      </form>
    </Container>
  )
}
