"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HomePage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #282828;
    border: 3px solid darkgoldenrod;
    border-radius: 10px;
    font-family: "Cinzel", serif;
    color: darkgoldenrod;
    margin: 20px auto;
    padding: 10vh 8vw;
    max-width: 60vw;
    text-align: center;
    
    h1 {
        font-size: calc(15px + 2vw);
        margin-bottom: 1.5vh;
    }

    h3 {
        font-size: calc(10px + 1vw);
        margin-bottom: 3vh;
    }

    @media screen and (max-width: 1000px) {
        max-width: 80vw;
        padding: 2rem;
    }
`;


const StyledInput = styled.input`
    padding: 1vh;
    margin-bottom: 3vh;
    border: 1px solid darkgoldenrod;
    border-radius: 5px;
    font-size: calc(5px + 1vw);
    width: 80%;
    max-width: 300px;
    background-color: #fff;
    color: #282828;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`;

const StyledButton = styled.button`
    font-weight: bold;
    font-size: calc(5px + 1vw);
    padding: 1.5vh 1.5vw;
    border-color: darkgoldenrod;
    background-color: darkgoldenrod;
    color: #282828;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e6c300;
    }
`;


export default function Home() {
    const [city, setCity] = useState("");

    return (
        <HomePage>
            <StyledDiv>
                <h1>Weather Forecast</h1>
                <h3>Weather at your fingertips: just enter a city name to begin.</h3>
                <StyledInput type="text" placeholder="e.g. New York, Beijing, London" value={city} onChange={ (e) => setCity(e.target.value)}/>
                <Link href={`/${city}`} passHref><StyledButton>Get Weather</StyledButton></Link>
            </StyledDiv>
        </HomePage>
    );
}
