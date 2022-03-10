import { Link } from 'react-router-dom'
import PATH from '../../services/paths'
import Container from '../Container'

export default function Navbar() {
  
  return (
    <nav className='py-3 shadow-[0px_4px_4px_rgba(0,0,0,0.04),0px_1px_1px_rgba(0,0,0,0.04)]'>
      <Container>
        <Link to={PATH.HOME}>
          <div className='col-span-2'>TeamsFinder</div>
        </Link>
        <div className='col-span-1 col-start-4 sm:col-start-12 sm:col-sapn-1 flex justify-end'>
          <Link to={PATH.LOGIN}>
            <div className='bg-[#1ebc60] uppercase rounded-[4px] rounded-tl-[0px] py-1 px-3 text-[#F1F1F1] whitespace-nowrap'>
              sign in
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  )
}
