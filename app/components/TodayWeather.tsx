import styled from "styled-components";
import { Weather } from "@/app/types/weather";

const MainWeatherWrapper = styled.div`
    border: 2px solid darkgoldenrod;
    border-radius: 10px;
    padding: 3vh 2vw;
    max-width: 500px;
    margin: auto;
    background-color: #fff;
    text-align: center;
    font-family: "Cinzel", serif;
    color: #282828;
    font-size: calc(10px + 1vw);
    
    p{
        margin: 1vh 0;
    }
`;



export default function TodayWeather(props: Weather) {
    return (
        <MainWeatherWrapper>
            <h3>{props.datetime}</h3>
            <p style={{ fontSize:"calc(25px + 1vw)", margin: "1.5vh 0" }}>{props.tempmin}°F / {props.tempmax}°F</p>
            <p>Feels Like: {props.feelslike}°</p>
            <p>Humidity: {props.humidity}%</p>
            <p>Wind: {props.windspeed} mph</p>
            <p>{props.description}</p>
        </MainWeatherWrapper>
    );
}

