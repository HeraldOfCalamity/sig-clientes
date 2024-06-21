import { useEffect, useState } from "react";

const ClientRegistration = ({ onRegister, selectedLocation }) => {
    const [nombre, setNombre] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');


    useEffect(() => {
        if (selectedLocation) {
            setLat(selectedLocation.lat);
            setLng(selectedLocation.lng);
        }
    }, [selectedLocation])

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({
            id: Date.now(),
            nombre,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
        })
        setNombre('');
        setLat('');
        setLng('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
            <input type="number" placeholder="Latitud" value={lat} onChange={e => setLat(e.target.value)} />
            <input type="number" placeholder="Longitud" value={lng} onChange={e => setLng(e.target.value)} />
            <button type="submit">
                Registrar Cliente
            </button>
        </form>
    )
};

export default ClientRegistration;