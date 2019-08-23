import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { Card, Icon, Tab } from 'semantic-ui-react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);

    // TODO: Add API Request here - must run in `useEffect`
    useEffect(() => {
      axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(res => {
            const charData = res.data.results;
              // console.log(charData);
              setCharList(charData)
          })
          .catch(err => {
              console.log(err);
          })
  }, []);
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
    <section className="character-list grid-view">
      {/* <h2>Character List!</h2> */}

      {charList.map(item => {
        return (
          <CharacterCard data={item}/>
        )
      })}

    </section>
  );
}
