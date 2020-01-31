import React from "react";

import styled from "styled-components";

const CharCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(127, 255, 0, 0.4);
    width: 200px;
    height: 250px;
    display: flex;
    margin: 1rem;
    background-color: white;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    width: 100%;

`;

const BigText = styled.p`
    display: flex; 
    justify-content: center;
    align-content: center;
    font-size: 0.8rem;
    width: 100%;
`;

const Text = styled.p`
    display: flex; 
    justify-content: center;
    align-content: center;
    font-size: 0.5rem;
    width: 100%;
`;

const Pic = styled.div`
    padding: 5%;
`;

const Card = ({ character }) => {
    console.log(`props from the card`, character);

    const { name, birthday, occupation, img, status, nickname } = character;

    return (
        <CharCard>
            <Pic>
                <img src={img} alt={`${name} from Breaking Bad`} style={{"maxWidth": "100px", "borderRadius": "5px"}}/>
            </Pic>
            <TextBox>
                <BigText>{name}</BigText>
                <Text>{birthday}</Text>
                <Text>{occupation}</Text>
                <Text>{status}</Text>
                <Text>{nickname}</Text>
            </TextBox>
        </CharCard>
    )
}

export default Card;