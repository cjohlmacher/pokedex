import Pokecard from '../Pokecard/Pokecard';
import styles from './Pokedex.css';

const Pokedex = ({pokemons, isWinner}) => {
    const pokeCards = pokemons.map(({id, name, type, base_experience}) => {
        return <Pokecard key={id} id={id} name={name} type={type} base_experience={base_experience} />
    });

    const winnerText = isWinner ? <div className="Pokedex-winner"><p>This hand wins!</p></div> : null

    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {pokeCards}
            </div>
            {winnerText}
        </div>
    );
};

export default Pokedex;