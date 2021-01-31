import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios from 'axios';

import Layout from '../components/Layout';
import { WeatherActions, useWeatherDispatch } from '../context/weatherContext';

import { tempWeather } from '../utilities/tempData';

const StyledContainer = styled.main`
  width: 900px;
  height: 900px;
  border-radius: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 12.5rem;

  p {
    font-size: var(--font-default);
    line-height: 2.6rem;
    text-align: center;
  }
`;

const StyledTitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: var(--font-title);
    margin-bottom: var(--spacing-sm);
  }

  p {
    font-size: var(--font-sm);
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  label {
    font-size: var(--font-md);
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    height: 4rem;
    width: 50rem;
    border: 1px solid #000000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: var(--font-default);
  }
`;

const StyledError = styled.p`
  color: #ff0000;
  font-size: var(--font-md);
`;

const StyledButton = styled.button`
  width: 25rem;
  height: 8rem;
  border-radius: 4rem;
  background-color: var(--color-blue-light);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: var(--font-md);
  cursor: pointer;
`;

export default function Home() {
  const router = useRouter();
  const weatherDispatch = useWeatherDispatch();
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      setError(
        'Geolocation is not supported by this browser. Please enter your city name instead.'
      );
    }
  }, []);

  const handleClick = () => {
    weatherDispatch({ type: WeatherActions.SET_WEATHER, payload: tempWeather });
    router.push('/weather');
    // if (coords) {
    //   const url = 'https://api.openweathermap.org/data/2.5/onecall';
    //   const params = {
    //     appid: process.env.NEXT_PUBLIC_API_KEY,
    //     lat: coords.lat,
    //     lon: coords.lon,
    //     exclude: 'minutely,hourly',
    //     units: 'imperial',
    //   };

    //   axios
    //     .get(url, { params })
    //     .then((response) => {
    //       weatherDispatch({
    //         type: WeatherActions.SET_WEATHER,
    //         payload: response.data,
    //       });
    //       router.push('/weather');
    //     })
    //     .catch((err) => setError(err));
    // }
  };

  return (
    <Layout title="Weather Window">
      <StyledContainer>
        <StyledTitleContainer>
          <h1>Weather Window</h1>
          <p>Your Virtual Glimpse at the Weather</p>
        </StyledTitleContainer>
        <p>
          In order to use this application, you must allow access to your
          browser's geolocation capabilities.
        </p>
        {error ? <StyledError>{error}</StyledError> : null}
        <StyledButton onClick={handleClick} disabled={coords === null}>
          Open the Window
        </StyledButton>
      </StyledContainer>
    </Layout>
  );
}
