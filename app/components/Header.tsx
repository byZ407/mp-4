"use client";

import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 2.5vh 3vw;
    background-color: #282828;
    border-bottom: 5px solid darkgoldenrod;
    text-align: left;

    @media (max-width: 1000px) {
        align-items: center;
    }
`;

const TitleContainer = styled.div`
    width: fit-content;
`;

const StyledTitle = styled.h1`
    font-family: "Cinzel", serif;
    color: darkgoldenrod;
    font-size: 35px;
    cursor: pointer;
    margin-bottom: 0.5vh;
`;

const StyledSubtitle = styled.p`
    font-family: "Cinzel", serif;
    font-size: 14px;
    margin-bottom: 0.5rem;
    color: #d3d3d3;
    text-align: center;
    width: 100%;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Link href="/" passHref>
                <TitleContainer>
                    <StyledTitle>WeatherNow</StyledTitle>
                    <StyledSubtitle>A CS391 Project</StyledSubtitle>
                </TitleContainer>
            </Link>
        </StyledHeader>
    );
}