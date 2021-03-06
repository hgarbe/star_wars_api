import React from 'react';
import { Route } from 'react-router-dom'
import CharacterList from './components/CharacterList'
import Home from './components/Home'
import PlanetList from './components/PlanetList'
import PlanetCard from './components/PlanetCard'
import CharacterCard from './components/CharacterCard'

function App() {
  return (
    <>
        <Route exact path='/' component={Home} />
        <Route exact path='/characterlist' component={CharacterList} />
        <Route exact path='/planetlist' component={PlanetList} />
        <Route exact path='/planets/:id' component={PlanetCard} />
        <Route exact path='/people/:id' component={CharacterCard} />
    </>
  );
}

export default App;