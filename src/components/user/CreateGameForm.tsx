import { useCreateGame, useCreateGameUpdate } from '../../store/useCreateGameContext'
import DatePicker from 'react-datepicker'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import 'react-datepicker/dist/react-datepicker.css'

const durationInputs = [
  { id: 1, name: '60', value: 60 },
  { id: 2, name: '120', value: 120 },
]

export default function CreateGameForm() {
  const { startDate, excludedTimes, createGameError, inputErrors, newGameInputs } = useCreateGame()
  const {
    handleSubmit,
    onInputChange,
    getExcludedTimes,
    handleNumbers,
    inputValidation,
    setStartDateFunc,
    setDurationFunc,
    setDateTimeFunc,
  } = useCreateGameUpdate()
  
  const filterPassedTime = (time: any) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)

    return currentDate.getTime() < selectedDate.getTime()
  }
  return (
    <section className='col-span-full mt-12 my-12 md:col-span-6 md:col-start-1'>
      <form className='flex flex-col gap-y-7' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label>title</label>
          <input
            type='text'
            name='name'
            value={newGameInputs.name}
            onChange={(e) => onInputChange(e)}
            onBlur={inputValidation}
            required
            placeholder='add title'
          />
          {inputErrors.name && <span className='text-[#ca3c37]'>{inputErrors.name}</span>}
        </div>
        <div className='flex flex-col'>
          <label>Description</label>
          <textarea
            name='description'
            value={newGameInputs.description}
            onChange={(e) => onInputChange(e)}
            onBlur={inputValidation}
            maxLength={250}
            required
          />
          {inputErrors.description && <span className='text-[#ca3c37]'>{inputErrors.description}</span>}
        </div>
        <div className='flex flex-row gap-x-6'>
          <div className='flex gap-x-4 items-center'>
            <label>Number of players</label>
            <input
              type='text'
              min={0}
              max={30}
              name='amountOfPlayers'
              value={newGameInputs.amountOfPlayers}
              onChange={handleNumbers}
              onBlur={inputValidation}
              className='w-fit'
            />
            {inputErrors.amountOfPlayers && <span className='text-[#ca3c37]'>{inputErrors.amountOfPlayers}</span>}
          </div>
          <div className='flex gap-x-4 items-center'>
            <label>Price / Person</label>
            <input
              type='text'
              min={0}
              name='price'
              value={newGameInputs.price}
              onChange={handleNumbers}
              onBlur={inputValidation}
              className='w-fit'
            />
            {inputErrors.price && <span className='text-[#ca3c37]'>{inputErrors.price}</span>}
          </div>
        </div>
        <div className='flex gap-x-4 items-center'>
          <div>
            <DatePicker
              selected={startDate}
              showTimeSelect
              onChange={(date: Date) => {
                getExcludedTimes(date)
                setStartDateFunc(date)                
              }}
              onSelect={setDateTimeFunc}
              excludeTimes={excludedTimes}
              minDate={new Date()}
              minTime={setHours(setMinutes(new Date(), 0), 6)}
              maxTime={setHours(setMinutes(new Date(), 0), 22)}
              filterTime={filterPassedTime}
              timeIntervals={60}
              timeFormat='HH:mm'
              disabled={false}
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
                  onChange={(e) => setDurationFunc(e)}
                />
                <label className='cursor-pointer' htmlFor={e.name}>
                  {e.name}
                </label>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center mt-2 text-[#ca3c37]'>{createGameError && createGameError}</div>
        <button type='submit' className='border-2 rounded-[8px] py-2 px-4'>
          Create a Game
        </button>
      </form>
    </section>
  )
}
