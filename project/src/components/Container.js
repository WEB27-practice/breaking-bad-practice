import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Card from "./Card.js";
// import SearchForm from "./SearchForm.js";

import axios from "axios";


const Container = () => {
    const [ characters, setCharacters ] = useState([])

    const [ search, setSearch ] = useState("");

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                console.log(res);
                const breaking = res.data.filter(name => 
                    name.name.toLowerCase().includes(search.toLowerCase())
                );
                setCharacters(breaking);
            })
            .catch(err => {
                console.log(`Go back and check your code`, err);
            })
    }, [search])

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <NavLink to="/home">Home Page</NavLink>
            <h1> This is the container! </h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Search for your character here:
                        <input 
                            type="text"
                            placeholder="Walter White 🔍"
                            name="character"
                            value={search}
                            onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
            {characters.map(char => {
                return <Card character={char}/>
            })}
        </div>
    )
}

export default Container;