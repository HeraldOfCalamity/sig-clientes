import { useEffect, useState } from 'react'
import MapView from './components/MapView'
import Locations from './map-assets/locations';


function App() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: 'Cliente 1', latitude: -17.783327, longitude: -63.182116 },
    { id: 2, nombre: 'Cliente 2', latitude: -19.033319, longitude: -65.262042 },
  ]);
  const [sectores, setSectores] = useState([
    {
      positions: [[-17.783327, -63.182116],
      [-17.783327, -62.182116],
      [-18.783327, -62.182116],
      [-18.783327, -63.182116],
      [-20.783327, -63.182116],
      [-18.783327, -64.182116]],
      color: 'blue'
    },
  ]);
  const [center, setCenter] = useState(Locations.COCHABAMBA);

  return (
    <>
      <h1>Hello World!</h1>
      <MapView clientes={clientes} sectores={sectores} center={center} />
    </>
  )
}

export default App
