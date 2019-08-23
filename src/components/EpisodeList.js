import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(res => {
                const episodesData = res.data.results;
                // console.log(episodesData);
                setEpisodeList(episodesData)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
    <div>
        {episodeList.map(item => {
            return (
                <EpisodeCard data={item} />
            )
            })}
        
    </div>
   )
}
