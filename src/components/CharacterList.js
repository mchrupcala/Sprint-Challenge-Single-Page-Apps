import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { Card, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

    // TODO: Add API Request here - must run in `useEffect`
    useEffect(() => {
      axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(res => {
              console.log(res.data.results);
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
      <h2>TODO: `array.map()` over your state here!</h2>
      
  <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />



    </section>
  );
}
