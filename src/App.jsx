import { useEffect, useState } from 'react'
import MapView from './components/Home/MapView'
import { departments } from './map-assets/departments';
import SelectDepartment from './components/Home/SelectDepartment';
import ClientRegistration from './components/Home/ClientRegistering';
import SelectLayer from './components/Home/SelectLayer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginView from './components/Login/LoginView';
import RegisterView from './components/Register/RegisterView';


function App() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: 'Cliente 1', lat: -17.783327, lng: -63.182116 },
    { id: 2, nombre: 'Cliente 2', lat: -19.033319, lng: -65.262042 },
  ]);
  const [mapCenter, setMapCenter] = useState({ lat: -16.290154, lng: -63.588653 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [layer, setLayer] = useState('normal');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


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
    <Router>
      <Routes>
        <Route path='/login' element={
          <LoginView onLogin={() => setIsAuthenticated(true)} />
        } />
        <Route path='/register' element={<RegisterView />} />
        <Route
          path='/'
          element={
            isAuthenticated ? (
              <div>
                <h1>Mapa Clientes</h1>
                <ClientRegistration onRegister={registerClient} selectedLocation={selectedLocation} />
                <SelectDepartment onChange={changeCenter} />
                <SelectLayer onChange={handleLayerChange} />
                <MapView clientes={clientes} /*sectores={sectores}*/ center={mapCenter} onClick={handleMapClick} layer={layer} />
              </div>
            ) : (
              <Navigate to='/login' />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
