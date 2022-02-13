import Container from './Container'
import {
  IconSearch,
  IconBallFootball,
  IconBallBasketball,
  IconBallVolleyball,
  IconBallTennis,
  IconAdjustments,
} from '@tabler/icons'

const disciplines = [
  { id: 1, title: 'football', icon: IconBallFootball },
  { id: 2, title: 'basketball', icon: IconBallBasketball },
  { id: 3, title: 'volleyball', icon: IconBallVolleyball },
  { id: 4, title: 'tennis', icon: IconBallTennis },
]

export default function SearchBar() {
  return (
    <section className='mt-3'>
      <Container>
        <div className='snap-x no-scrollbar w-full col-span-full flex items-center gap-x-3 overflow-x-auto'>
          <label className='snap-center flex items-center gap-x-1 rounded-[30px] p-[6px] bg-gray-100'>
            <IconSearch size={20} color='#a6aeb7' stroke={2} />
            <input
              type='text'
              className='transition-all duration-200 w-[70px] p-0 focus:w-[200px] border-0 bg-gray-100 outline-none focus:ring-0 font-light'
              placeholder='Search...'
            />
          </label>
          {disciplines.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className='snap-start flex items-center gap-x-1 font-light border-[1px] rounded-[30px] py-[6px] px-4'
              >
                <Icon size={20} color='#a6aeb7' stroke={2} />
                {item.title}
              </button>
            )
          })}
          <button className='flex items-center gap-x-1 font-light border-[1px] rounded-[30px] py-[6px] px-4 whitespace-nowrap'>
            <IconAdjustments size={20} color='#a6aeb7' stroke={2} />
            more filters
          </button>
        </div>
      </Container>
    </section>
  )
}
