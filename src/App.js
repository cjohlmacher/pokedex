import './App.css';
import Pokegame from './Components/Pokegame/Pokegame';

const DECK_SIZE = 4;

const defaultPokemon = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

const deckOne = [];

while (defaultPokemon.length > DECK_SIZE) {
    let randomIdx = Math.floor(Math.random()*defaultPokemon.length);
    deckOne.push(defaultPokemon[randomIdx]);
    defaultPokemon.splice(randomIdx,1);
}

const deckTwo = [...defaultPokemon];

function App() {
  return (
    <div className="App">
      <Pokegame deckOne={deckOne} deckTwo={deckTwo} />
    </div>
  );
}

export default App;
