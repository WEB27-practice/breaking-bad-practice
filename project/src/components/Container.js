import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Card from "./Card.js";
import SearchForm from "./SearchForm.js";

import axios from "axios";


const Container = () => {
    const [ characters, setCharacters ] = useState([])

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                console.log(res);
                setCharacters(res.data);
            })
            .catch(err => {
                console.log(`Go back and check your code`, err);
            })
    }, [])

    return (
        <div>
            <NavLink to="/home">Home Page</NavLink>
            <h1> This is the container! </h1>
            <SearchForm />
            {characters.map(char => {
                return <Card character={char}/>
            })}
        </div>
    )
}

export default Container;