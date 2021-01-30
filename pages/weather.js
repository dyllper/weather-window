import styled from 'styled-components';

import { useWeatherState } from '../context/weatherContext';

import Layout from '../components/Layout';
import CurrentConditions from '../components/CurrentConditions';
import Forecast from '../components/Forecast';

import { convertTimeToLocale } from '../utilities/dateUtils';

const StyledContainer = styled.main`
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

export default function Weather() {
  const weatherState = useWeatherState();
  const { weather } = weatherState;

  return (
    <Layout bgImage="rain" title={`Weather for city name`}>
      <StyledContainer>
        <h1>Weather Window</h1>
        <h2>Current Conditions</h2>
        <h3>{convertTimeToLocale(weather.current.dt)}</h3>

        <CurrentConditions />

        <Forecast forecastArray={weather.daily} />
      </StyledContainer>
    </Layout>
  );
}
