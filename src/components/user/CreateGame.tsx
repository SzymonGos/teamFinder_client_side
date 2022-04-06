import Container from '../Container'
import GetVenuesForm from './GetVenuesForm'
import CreateGameForm from './CreateGameForm'
import { CreateGameProvider } from '../../store/useCreateGameContext'

export default function CreateGame() {
  return (
    <CreateGameProvider>
      <Container className='px-0 sm:px-0'>
        <GetVenuesForm />
        <CreateGameForm />
      </Container>
    </CreateGameProvider>
  )
}
