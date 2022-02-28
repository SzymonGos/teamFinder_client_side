import Container from '../Container'

export default function User() {
  return (
    <Container className='px-0 sm:px-0'>
      <div className='col-span-full'>New Game</div>
      <form className='col-span-full md:col-span-6 border-2 '>
        <div className='flex flex-col'>
          <label>title</label>
          <input type='text' required placeholder='add title' />
        </div>
        <div className='flex flex-col'>
          <label>Select Discipline</label>
          <select>
            <option>football</option>
            <option>basketball</option>
            <option>volleyball</option>
            <option>tennis</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label>Select Venue</label>
          <select>
            <option>venue option</option>
            <option>venue option</option>
            <option>venue option</option>
            <option>venue option</option>
          </select>
        </div>
      </form>
    </Container>
  )
}
