"use client"
import React, {useState, useEffect } from 'react'
import Image from 'next/image'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon } from "leaflet";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectDetails, setDetails, setIsResultCardClicked, selectIsResultCardClicked } from '../../redux/autocomplete-slice';
import { DetailsModal} from '../_modal/detailsmodal';
import { SearchResult } from '../../redux/types';

type props = {
    locations: SearchResult[]
}

/**
 * Renders a map with markers for given locations and
 * displays a modal with details when a marker is clicked.
 * @param {props}  - - `locations`: an array of objects representing the locations to be displayed on
 * the map. Each object should have an `id`, `location.lat`, and `location.lon` property.
 * The locations array is mapped over to create Marker components for each location.
 * Each Marker component has a customMarker icon and eventHandlers for click events. When a Marker is
 * clicked, it dispatches an action to set the details of the location and opens the DetailsModal.
 */
const Map = ({ locations }: props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const details = useSelector(selectDetails) as SearchResult;
    const isResultCardClicked = useSelector(selectIsResultCardClicked);
    
    // use my current location
    const position = [ 42.354022, -71.046245]
    const zoom = 13
    const maxZoom = 18

    const customMarker = new Icon({
        iconUrl: 'pin.png',
        iconSize: [38, 38],
    });

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(setIsResultCardClicked(false));
    }
  return (
    <MapContainer
        center={[ 42.354022, -71.046245]}
        zoom={zoom}
        maxZoom={maxZoom}
        style={{height: '100vh', zIndex: 1}}
    >
        <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 
        {locations.map((loc, index) => (
            <Marker key={loc.id} position={[loc.location?.lat, loc.location?.lon]} icon={customMarker}
                eventHandlers={{
                    click: () => {
                        dispatch(setDetails(loc));
                        setIsModalOpen(true);
                    },
                }}
            >
                <Popup>
                    {loc.name}
                </Popup>  
            </Marker>
            ))} 

         {isModalOpen && (
            <DetailsModal 
                location={details} 
                isOpen={isModalOpen} 
                onClose={handleCloseModal}
            />
         )}

         {isResultCardClicked &&(
            <DetailsModal
                location={details}
                isOpen={isResultCardClicked}
                onClose={handleCloseModal}
            />
         )}

    </MapContainer>

  );

}

export default Map;