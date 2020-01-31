import React, { useState, useEffect } from "react";

import Card from "./Card.js";
import SearchForm from "./SearchForm.js";

import axios from "axios";

const Container = () => {
    const [ characters, setCharacters ] = useState([])

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(`Go back and check your code`, err);
            })
    }, [])

    return (
        <div>
            <h1> This is the container! </h1>
            <SearchForm />
            <Card />
        </div>
    )
}

export default Container;