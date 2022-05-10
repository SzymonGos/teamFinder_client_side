import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../Container'
import Map from './Map'
import { API_URL } from '../../config/config'

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1)
  const [allGames, setAllGames] = useState<any>([])
  const [islLoading, setIsLoading] = useState(false)
  const [selectedGameId, setSelectedGameId] = useState<number>()
  const [singleGame, setSingleGame] = useState([])
  
  const getAllGames = async () => {
    setIsLoading(true)
    try {
      const resp = await axios.get(`${API_URL}/games`)
      setAllGames(resp.data)
      setIsLoading(false)
    } catch (e: any) {
      console.error(e.response.data.message)
    }
  }

  useEffect(() => {
    getAllGames()
    return () => {
      setAllGames([])
    }
  }, [])

  useEffect(() => {
    setSingleGame(allGames?.filter((x: any) => x.id === selectedGameId))
    return () => {
      setSingleGame([])
    }
  }, [selectedGameId])

  return (
    <section className='mt-4'>
      <Container>
        <div className='col-span-full flex lg:hidden items-center gap-x-3'>
          <button onClick={() => setOpenTab(1)} className='py-2 px-5 bg-gray-300'>
            Games
          </button>
          <button onClick={() => setOpenTab(2)} className='py-2 px-5 bg-gray-300'>
            Map
          </button>
        </div>

        <div className='col-span-full bg-white mb-6 md:mb-0 shadow-lg rounded'>
          <div className='col-span-full lg:flex lg:gap-x-2'>
            <div
              className={`${openTab === 1 ? 'block' : 'hidden'} lg:block lg:flex-1 h-[calc(100vh-150px)] overflow-auto`}
            >
              {islLoading ? (
                <div className='flex justify-center items-center h-[calc(100vh-150px)]'>Loading...</div>
              ) : (
                allGames?.map((e: any) => {
                  const { id, name, sportDisciplineName, price } = e
                  return (
                    <div
                      className='flex flex-row mb-3 mr-3 p-6 gap-x-12 rounded-[8px] cursor-pointer border-2'
                      key={id}
                      onClick={() => setSelectedGameId(id)}
                    >
                      <div className='flex-1 font-bold'>{name}</div>
                      <div className='flex-1 font-bold'>{sportDisciplineName}</div>
                      <div className='flex-1 font-bold'>
                        Price: <span className='font-normal'>£{price}</span>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
            <div className={`${openTab === 2 ? 'block' : 'hidden'} lg:block lg:flex-1 h-[calc(100vh-150px)] border-2 relative`}>
              <Map allGames={allGames}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
