import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

import Layout from '../components/Layout';
import { WeatherActions, useWeatherDispatch } from '../context/weatherContext';

import { tempWeather } from '../utilities/tempData';

const StyledContainer = styled(motion.main)`
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
    text-align: left;
    text-indent: 1.5rem;
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

  small {
    font-size: var(--font-sm);
    text-align: left;
  }
`;

const StyledUnitsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-sm);

  input {
    margin-right: 0.5rem;
    height: 2rem;
    width: 2rem;
  }

  label {
    margin-right: var(--spacing-sm);
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
  const [measurementUnit, setMeasurementUnit] = useState('imperial');
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

  const onUnitSelectionChange = (event) => {
    setMeasurementUnit(event.target.value);
  };

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
    //     units: measurementUnit,
    //   };

    //   axios
    //     .get(url, { params })
    //     .then((response) => {
    //       const weatherInfo = { ...response.data, units: measurementUnit };
    //       weatherDispatch({
    //         type: WeatherActions.SET_WEATHER,
    //         payload: weatherInfo,
    //       });
    //       router.push('/weather');
    //     })
    //     .catch(() => {
    //       setError('Failed to retrieve weather data from server.');
    //     });
    // }
  };

  return (
    <Layout title="Weather Window">
      <StyledContainer
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <StyledTitleContainer>
          <h1>Weather Window</h1>
          <small>Your Virtual Glimpse at the Weather</small>
        </StyledTitleContainer>
        <p>
          In order to use this application, you must allow access to your
          browser's geolocation capabilities. If this is not something you are
          comfortable with, keep an eye out for a future update that will allow
          fetching weather data by city name!
        </p>
        {error ? <StyledError>{error}</StyledError> : null}
        <div>
          Select your preferred unit of measurement:
          <StyledUnitsContainer onChange={onUnitSelectionChange}>
            <input
              type="radio"
              name="unit"
              id="imperial"
              value="imperial"
              defaultChecked
            />
            <label htmlFor="imperial"> Imperial</label>
            <input type="radio" name="unit" id="metric" value="metric" />
            <label htmlFor="metric"> Metric</label>
          </StyledUnitsContainer>
        </div>
        <StyledButton onClick={handleClick} disabled={coords === null}>
          Open the Window
        </StyledButton>
      </StyledContainer>
    </Layout>
  );
}
