import { useEffect, useState } from 'react'
import MapView from './components/MapView'
import { departments } from './map-assets/departments';
import SelectDepartment from './components/SelectDepartment';
import ClientRegistration from './components/ClientRegistering';
import SelectLayer from './components/SelectLayer';


function App() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: 'Cliente 1', lat: -17.783327, lng: -63.182116 },
    { id: 2, nombre: 'Cliente 2', lat: -19.033319, lng: -65.262042 },
  ]);
  // const [sectores, setSectores] = useState([
  //   {
  //     positions: [
  //       [-17.783327, -63.182116],
  //       [-17.783327, -62.182116],
  //       [-18.783327, -62.182116],
  //       [-18.783327, -63.182116],
  //     ],
  //     color: 'blue'
  //   },
  // ]);
  const [mapCenter, setMapCenter] = useState({ lat: -16.290154, lng: -63.588653 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [layer, setLayer] = useState('normal');


  const registerClient = (client) => {
    setClientes([...clientes, client]);
  };
  const changeCenter = (key) => {
    setMapCenter({ lat: departments[key].lat, lng: departments[key].lng });
  };
  const handleMapClick = (location) => {
    setSelectedLocation(location);
  };
  const handleLayerChange = (layer) => {
    setLayer(layer);
  }

  return (
    <>
      <h1>Mapa Clientes</h1>
      <ClientRegistration onRegister={registerClient} selectedLocation={selectedLocation} />
      <SelectDepartment onChange={changeCenter} />
      <SelectLayer onChange={handleLayerChange} />
      <MapView clientes={clientes} /*sectores={sectores}*/ center={mapCenter} onClick={handleMapClick} layer={layer} />
    </>
  )
}

export default App
