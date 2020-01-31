import React from "react";

const Card = ({ character }) => {
    console.log(`props from the card`, character);

    const { name, birthday, occupation, img, status, nickname } = character;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{birthday}</h2>
            <h2>{occupation}</h2>
            <img src={img} alt={`${name} from Breaking Bad`} />
            <h2>{status}</h2>
            <h2>{nickname}</h2>
        </div>
    )
}

export default Card;