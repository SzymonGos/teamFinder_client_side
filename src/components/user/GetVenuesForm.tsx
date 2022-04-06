import { useCreateGame, useCreateGameUpdate } from '../../store/useCreateGameContext'

const disciplineOptions = [
  { label: 'Football', value: 'football' },
  { label: 'Basketball', value: 'basketball' },
  { label: 'Volleyball', value: 'volleyball' },
  { label: 'Tennis', value: 'tennis' },
]

export default function GetVenuesForm() {
  const { venueAddress, venues, venueError } = useCreateGame()
  const { handleGetVenues, setSportDisciplineNameFunc, setVenueAddressFunc, setVenueIdFunc, setVenueBusyTermsFunc } =
    useCreateGameUpdate()
  return (
    <section className='col-span-full md:col-span-6 md:col-start-1 flex flex-col border-2 p-6 gap-y-10'>
      <form className='flex flex-col gap-y-5' onSubmit={handleGetVenues}>
        <div className='flex flex-col w-fit'>
          <label>Select Discipline</label>
          <select onChange={(e) => setSportDisciplineNameFunc(e)}>
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
        <input type='text' placeholder='Enter address' value={venueAddress} onChange={(e) => setVenueAddressFunc(e)} required />
        {venues.length > 0 && !venueError && (
          <select
            defaultValue='default'
            onChange={(e) => {
              setVenueIdFunc(e)
              setVenueBusyTermsFunc(e)
            }}
          >
            <option value='' hidden>
              Choose your venue
            </option>
            {venues.map((e: any, i: number) => {
              return (
                <option value={[e.id, e.busyTerms]} key={i}>
                  {e.name} - {e.address}
                </option>
              )
            })}
          </select>
        )}
        <div>Missing your venue? Contact our support team</div>
        <div className='flex justify-center mt-2 text-[#ca3c37]'>{venueError && venueError}</div>
        <button type='submit' className='border-2 rounded-[8px] py-2 px-4'>
          select venues
        </button>
      </form>
    </section>
  )
}
