"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import styled from "styled-components";
import WeatherForecast from "../components/WeatherForecast";
import TodayWeather from "../components/TodayWeather";
import { Weather } from "@/app/types/weather";

const MainContainer = styled.div`
    min-height: 100vh;
    width: 80vw;
    margin: 5vh auto;
    padding: 5vh 3vw;
    border: 3px solid darkgoldenrod;
    border-radius: 10px;
    font-family: "Cinzel", serif;
    color: darkgoldenrod;
    background-color: #282828;
    text-align: center;
`;

const ForecastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1vw;
    margin-top: 2vh;
`;

export default function CityPage() {
    const params = useParams();

    const { data, error } = useSWR(
        `/api/getWeatherData?city=${params.city}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error) return <div style={{ color: "red" }}>{error.message}</div>;
    if (!data) return <div style={{ color: "darkgoldenrod" }}>Loading...</div>;

    const days = data?.days;
    if (!days) return <div>Forecast not available</div>;
    const today = days[0];

    return (
        <MainContainer>
            <h2 style={{ marginBottom: "3vh", fontSize: "calc(10px + 2vw)" }}>Weather in {params.city}</h2>

            <TodayWeather
                {...today}
                datetime={today.datetime}
                description={today.description}
                tempmin={today.tempmin}
                tempmax={today.tempmax}
                humidity={today.humidity}
                windspeed={today.windspeed}
                feelslike={today.feelslike}
            />

            <h4 style={{ fontSize: "calc(7px + 2vw)", marginTop: "10vh", marginBottom: "3vh" }}>7-Day Forecast</h4>

            <ForecastList>
                {days.slice(1, 8).map((weather: Weather, i: number) => (
                    <WeatherForecast
                        key={i}
                        datetime={weather.datetime}
                        tempmin={weather.tempmin}
                        tempmax={weather.tempmax}
                        description={weather.description}
                    />
                ))}
            </ForecastList>
        </MainContainer>
    );
}


