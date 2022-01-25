import Pokedex from '../Pokedex/Pokedex';
import styles from './Pokegame.css';

const Pokegame = ({deckOne, deckTwo}) => {
    const playerOneScore = deckOne.reduce((score,pokemon) => {
        return score + pokemon.base_experience;
    },0);
    const playerTwoScore = deckTwo.reduce((score,pokemon) => {
        return score + pokemon.base_experience;
    },0);

    const deckOneIsWin = playerOneScore > playerTwoScore ? true : false;
    
    return (
        <div className="Pokegame">
            <h2>Player One's deck</h2>
            <Pokedex pokemons={deckOne} isWinner={deckOneIsWin} />
            <h2>Player Two's deck</h2>
            <Pokedex pokemons={deckTwo} isWinner={!deckOneIsWin} />
        </div>
    );
};

export default Pokegame;