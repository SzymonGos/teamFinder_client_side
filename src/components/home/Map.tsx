import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api'
import { MAPS_API_KEY } from '../../config/config'
import mapStyles from '../../styles/mapStyles'

const mapConttainerStyle = {
  width: '100vhw',
  height: 'calc(100vh - 150px)',
}

const center = {
  lat: 52.519325,
  lng: 13.392709,
}

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}
const clustererOptions = {
  gridSize: 20,
  averageCenter: true,
  maxZoom: 15
}

export default function Map({allGames}:{allGames: any}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${MAPS_API_KEY}`,
  })
const [selected, setSelected] = useState<any>(null)

  return isLoaded ? (
    <section>
      <GoogleMap mapContainerStyle={mapConttainerStyle} zoom={5} center={center} options={mapOptions}>
        <MarkerClusterer options={clustererOptions}>
          {(clusterer) =>
            allGames.map((e: any, i: number) => (
              <Marker
                key={i}
                label={e.sportDisciplineName.slice(0, 1).toUpperCase()}
                position={{ lat: e.lattitude, lng: e.longitude }}
                clusterer={clusterer}
                onClick={() => setSelected(e)}
                onMouseOver={() => console.log(e)
                }
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </section>
  ) : (
    <>Loading Map</>
  )
}
