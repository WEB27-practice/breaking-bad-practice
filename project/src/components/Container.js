import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Card from "./Card.js";
import styled from "styled-components";

import axios from "axios";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
`;

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Label = styled.label`
    font-size: 3rem;
`;

const Input = styled.input`
    font-size: 2rem;
    padding-left: 1rem;
    box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(127, 255, 0, 0.4);
`;

const Container = () => {
    const [ characters, setCharacters ] = useState([])

    const [ search, setSearch ] = useState("");

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                console.log(res);
                const breaking = res.data.filter((name) => {
                    return (
                        name.name.toLowerCase().includes(search.toLowerCase()) || name.nickname.toLowerCase().includes(search.toLowerCase()) || name.status.toLowerCase().includes(search.toLowerCase())
                )});
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
            <Form>
                <form onSubmit={handleSubmit}>
                    <Label>
                        Search the characters here:
                        <Input 
                            type="text"
                            placeholder="Walter White 🔍"
                            name="character"
                            value={search}
                            onChange={handleChange}
                        />
                    </Label>
                </form>
            </Form>
            <Wrapper>
            {characters.map(char => {
                return <Card character={char}/>
            })}
            </Wrapper>
        </div>
    )
}

export default Container;