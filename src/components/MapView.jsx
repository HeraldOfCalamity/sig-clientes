import L from 'leaflet';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, Marker, Polygon, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { departments } from '../map-assets/departments';
import { useEffect, useState } from 'react';



// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: markerIcon2x,
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow
// })

const ChangeView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center);
    }, [center, map]);

    return null;
}
const LocationMarker = ({ onClick }) => {
    const [position, setPosition] = useState(null);
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onClick(e.latlng);
        }
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                Ubicacion seleccionada: <br /> {position.lat}, {position.lng}
            </Popup>
        </Marker>
    )
};
const MapView = ({ clientes, sectores, center, onClick }) => {
    return (
        <MapContainer
            center={center}
            zoom={6}
            style={{ height: "50vh", width: "100%" }}
        >
            <ChangeView center={center} />
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {clientes.map(cliente => (
                <Marker key={cliente.id} position={[cliente.lat, cliente.lng]}>
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
            <LocationMarker onClick={onClick} />
        </MapContainer>
    );
}

export default MapView;