import React from "react";
import {Route, NavLink} from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
// import CharacterList from "./components/CharacterList";
// import LocationsList from "./components/LocationsList";
// import EpisodeList from "./components/EpisodeList";
// import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      {/* <SearchForm /> */}
      <TabNav />
      {/* <CharacterList /> */}
      {/* <LocationsList /> */}
      {/* <EpisodeList /> */}

    {/* <Route path="/CharacterList" component={CharacterList} /> */}
    {/* <Route path="/LocationsList" component={LocationsList} />
    <Route path="/EpisodeList" component={EpisodeList} /> */}
    </main>
  );
}
