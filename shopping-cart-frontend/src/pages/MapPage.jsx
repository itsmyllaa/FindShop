import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corrige o ícone padrão que não aparece em alguns ambientes
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapPage = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            (err) => {
                console.error("Erro ao obter localização:", err);
                alert("Não foi possível acessar sua localização.");
            }
        );
    }, []);

    return (
        <div className="h-screen w-full">
            {position ? (
                <MapContainer center={position} zoom={15} className="h-full w-full">
                    <TileLayer
                        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Você está aqui! 📍</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <div className="text-white flex items-center justify-center h-full bg-gray-800">
                    Carregando mapa...
                </div>
            )}
        </div>
    );
};

export default MapPage;
