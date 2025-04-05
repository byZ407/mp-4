import styled from "styled-components";
import { Weather } from "@/app/types/weather";

const WeatherForecastWrapper = styled.div`
    border: 2px solid darkgoldenrod;
    border-radius: 10px;
    padding: 2vh 1vw;
    width: 20%;
    text-align: center;
    background-color: #fff;
    font-family: "Cinzel", serif;
    color: #282828;
`;

export default function WeatherForecast(props: Partial<Weather>) {
    return (
        <WeatherForecastWrapper>
            <strong style={{fontSize:"calc(8px + 1vw)"}}>{props.datetime}</strong>
            <p style={{fontSize:"calc(12px + 1vw)", margin: "1.5vh 0" }}>
                {props.tempmin}°F / {props.tempmax}°F
            </p>
            <p style={{fontSize:"calc(6px + 1vw)"}}>{props.description}</p>
        </WeatherForecastWrapper>
    );
}

