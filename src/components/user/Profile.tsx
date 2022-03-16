import { useStore } from '../../store/userProfile'
import Container from '../Container'

export default function User() {
  const store = useStore()

  return (
    <section className='mt-10'>
      <Container>
        <div className='whitespace-nowrap'>Hello {store.state.user.username} !</div>
      </Container>
    </section>
  )
}
