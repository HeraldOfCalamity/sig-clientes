import L from 'leaflet';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: markerIcon2x,
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow
// })


const MapView = ({ clientes, sectores, center }) => {
    return (
        <MapContainer
            center={center}
            zoom={10}
            style={{ height: "50vh", width: "100%" }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            ></TileLayer>
            {clientes.map(cliente => (
                <Marker key={cliente.id} position={[cliente.latitude, cliente.longitude]}>
                    <Popup>
                        {cliente.nombre}
                    </Popup>
                </Marker>
            ))}
            {sectores.map((sector, idx) => (
                <Polygon key={idx} positions={sector.positions} color={sector.color}>
                    <Popup>
                        {`Sector ${idx + 1}`}
                    </Popup>
                </Polygon>
            ))}
        </MapContainer>
    );
}

export default MapView;