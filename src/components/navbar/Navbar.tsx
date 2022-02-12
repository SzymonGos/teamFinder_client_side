import Container from "../Container"
export default function Navbar() {
  return (
    <nav className='py-3 shadow-[0px_4px_4px_rgba(0,0,0,0.04),0px_1px_1px_rgba(0,0,0,0.04)]'>
      <Container>
        <div className='col-span-2'>TeamsFinder</div>
        <div className='col-span-2 flex justify-end'>
          <button className='bg-[#1ebc60] uppercase rounded-[4px] rounded-tl-[0px] py-1 px-3 text-[#F1F1F1]'>sign in</button>
        </div>
      </Container>
    </nav>
  )
}
