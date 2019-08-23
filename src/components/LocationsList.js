import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [placesList, setPlacesList] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                const placesData = res.data.results;
                console.log(placesData);
                setPlacesList(placesData)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
        {placesList.map(item => {
            return (
                <LocationCard data={item} />
            )
          })}

        </div>
    )
}
