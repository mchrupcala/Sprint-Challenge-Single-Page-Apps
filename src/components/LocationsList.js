import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react';
import axios from 'axios';

const items = [
    {
      header: 'Project Report - April',
      description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'ROI: 30%',
    },
]

export default function LocationsList() {
    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                console.log(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
    <Card.Group items={items} />
    )
}
