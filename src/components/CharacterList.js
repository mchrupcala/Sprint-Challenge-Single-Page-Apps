import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { Card, Icon } from 'semantic-ui-react';
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
              console.log(charData);
              setCharList(charData)
          })
          .catch(err => {
              console.log(err);
          })
  }, []);
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
  )

  return (
    <section className="character-list grid-view">
      {/* <h2>Character List!</h2> */}

      {charList.map(item => {
        return (
          <Card
          image={item.image}
          header={item.name}
          meta={item.location.name}
          description={item.species}
        />
        )
      })}
      
    </section>
  );
}
