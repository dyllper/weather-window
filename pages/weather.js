import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { useWeatherState } from '../context/weatherContext';

import Layout from '../components/Layout';
import CurrentConditions from '../components/CurrentConditions';
import Forecast from '../components/Forecast';

import { convertDateToLocale } from '../utilities/dateUtils';

const StyledContainer = styled.main`
  display: relative;
  width: 900px;
  height: 900px;
  border-radius: 24px;
  background-color: var(--color-glass);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 12.5rem;
  backdrop-filter: blur(2rem);

  h1 {
    font-size: var(--font-title);
    margin-bottom: var(--spacing-md);
  }

  h2 {
    font-size: var(--font-xlg);
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: var(--spacing-sm);
  }

  h3 {
    font-size: var(--font-md);
    font-weight: normal;
    margin-bottom: var(--spacing-lg);
  }
`;

const StyledBackButton = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledError = styled.p`
  color: #ff0000;
  font-size: var(--font-lg);
  text-align: center;
  margin: var(--spacing-md);
`;

export default function Weather() {
  const weatherState = useWeatherState();
  const { weather } = weatherState;

  return (
    <Layout bgImage="rain" title={`Weather for city name`}>
      <StyledContainer>
        <StyledBackButton>
          <Link href="/">
            <a>
              <Image
                src="/back-arrow.svg"
                alt="Go to previous page"
                height={40}
                width={40}
              />
            </a>
          </Link>
        </StyledBackButton>
        <h1>Weather Window</h1>

        {weather && weather.current ? (
          <div>
            <h3>{convertDateToLocale(weather.current.dt)}</h3>
            <CurrentConditions weather={weather} />
          </div>
        ) : (
          <StyledError>
            Failed to retrieve current weather data from server.
          </StyledError>
        )}

        {weather?.daily ? (
          <Forecast
            forecastArray={weather.daily}
            measurementUnit={weather.units}
          />
        ) : (
          <StyledError>
            Failed to retrieve forecast data from server.
          </StyledError>
        )}
      </StyledContainer>
    </Layout>
  );
}
