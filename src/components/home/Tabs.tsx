import { useState } from 'react'
import Container from '../Container'

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1)
  return (
    <section className='mt-4'>
      <Container>
        <div className='col-span-full flex lg:hidden items-center gap-x-3'>
          <button onClick={() => setOpenTab(1)} className='py-2 px-5 bg-gray-300 rounded-tr-[20px] rounded-tl-[20px]'>
            button 1
          </button>
          <button onClick={() => setOpenTab(2)} className='py-2 px-5 bg-gray-300 rounded-tr-[20px] rounded-tl-[20px]'>
            button 2
          </button>
        </div>

        <div className='col-span-full  bg-white mb-6 shadow-lg rounded'>
          <div className='col-span-full lg:flex lg:gap-x-2'>
            <div className={`${openTab === 1 ? 'block' : 'hidden'} lg:block lg:flex-1 h-[100vh] border-2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt veritatis modi commodi quam
              eius, explicabo natus. Soluta minima explicabo quibusdam assumenda repudiandae mollitia rerum? At sed
              itaque consectetur asperiores vitae laudantium laboriosam aut ullam eius amet eos soluta, sunt assumenda
              qui dicta? Non assumenda iure vel sunt dolorum similique!
            </div>
            <div className={`${openTab === 2 ? 'block' : 'hidden'} lg:block lg:flex-1 h-[100vh] border-2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt veritatis modi commodi quam
              eius, explicabo natus. Soluta minima explicabo quibusdam assumenda repudiandae mollitia rerum? At sed
              itaque consectetur asperiores vitae laudantium laboriosam aut ullam eius amet eos soluta, sunt assumenda
              qui dicta? Non assumenda iure vel sunt dolorum similique!aboriosam aut ullam eius amet eos soluta, sunt assumenda
              qui dicta? Non assumenda iure vel sunt dolorum similique!aboriosam aut ullam eius amet eos soluta, sunt assumenda
              qui dicta? Non assumenda iure vel sunt dolorum similique!
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
