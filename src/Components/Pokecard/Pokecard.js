import styles from './Pokecard.css';

const Pokecard = ({id,name,type,base_experience}) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-title">{name}</h3>
            <img src={imgSrc} alt="alt" />
            <div>
                <p>Type: {type}</p>
                <p>EXP: {base_experience}</p>
            </div>
        </div>
    )
};

export default Pokecard;