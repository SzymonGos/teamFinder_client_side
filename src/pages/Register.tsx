import Container from '../components/Container'
import Slider from '../components/login/Slider'

export default function Register() {
  return (
    <section className='mt-6'>
      <Container>
      <div className='col-span-full md:col-span-6 lg:col-span-3 lg:col-start-3 lg:block lg:flex-1 items-center h-full border-2'>
        <form className='flex flex-col w-full gap-y-10'>
        <div className='flex flex-col'>
              <label>Name</label>
              <input type='text' placeholder='Name' />
            </div>
            <div className='flex flex-col'>
              <label>Email</label>
              <input type='text' placeholder='Email' />
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input type='text' placeholder='Password' />
            </div>
            <div className='flex flex-col'>              
              <input type='text' placeholder='Repeat Password' />
            </div>
            <button>Register</button>
          </form>
        </div>

        <div className='hidden md:block md:col-start-7 md:col-span-6 md:flex-1'>
          <Slider />
        </div>
      </Container>
    </section>
  )
}
