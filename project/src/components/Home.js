import React from "react";

import styled from "styled-components";

const HomePage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`;


const Home = () => {


    return (
        <HomePage>
            <img src="https://cdn.dribbble.com/users/11219/screenshots/1270901/breaking-bad-illustrations.png" alt="" style={{"height": "500px", "border-radius" : "1%"}}/>
        </HomePage>
    )
}

export default Home;