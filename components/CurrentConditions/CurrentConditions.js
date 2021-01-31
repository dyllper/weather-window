import Image from 'next/image';
import styled from 'styled-components';

import GlassPanel from '../GlassPanel';

import { useWeatherState } from '../../context/weatherContext';
import { getPathForWeatherIcon } from '../../utilities/iconUtils';
import { convertTimeToLocale } from '../../utilities/dateUtils';

const StyledCurrentConditionsContainer = styled.section`
  height: 30rem;
  width: 70rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: var(--spacing-md);
`;

const StyledGlassContainer = styled(GlassPanel)`
  height: 14.5rem;
  width: 34.5rem;
  justify-content: center;
  align-items: center;
`;

const StyledCurrentTemp = styled.div`
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--color-blue-dark);
  color: var(--color-blue-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-title);
  margin-right: 3rem;

  small {
    font-size: var(--font-default);
    color: var(--color-text);
  }
`;

const StyledTempSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    margin-bottom: 1.5rem;
  }

  span {
    color: var(--color-blue-dark);
  }
`;

const StyledSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 3rem;
  padding: 1rem 0;
`;

const StyledSunrisePanel = styled(StyledGlassContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSunriseInfo = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    margin-left: 3rem;
  }
`;

export default function CurrentConditions() {
  const weatherState = useWeatherState();
  const { weather } = weatherState;

  return (
    <StyledCurrentConditionsContainer>
      <StyledGlassContainer>
        <StyledCurrentTemp>
          {Math.ceil(weather.current.temp)}
          <small> &#176;F</small>
        </StyledCurrentTemp>
        <StyledTempSummary>
          <p>
            Feels Like: <span>{Math.ceil(weather.current.feels_like)}</span>
            &#176;
          </p>
          <p>
            Low: <span>{Math.ceil(weather.daily[0].temp.min)}</span>&#176;
          </p>
        </StyledTempSummary>
      </StyledGlassContainer>

      <StyledGlassContainer>
        <Image
          src={getPathForWeatherIcon(weather.current.weather[0].icon)}
          alt={weather.current.weather[0].main}
          height={130}
          width={130}
        />
        <StyledSummary>
          <span>{weather.current.weather[0].main}</span>
          <span>Clouds: {weather.current.clouds}%</span>
          <span>Wind: {Math.ceil(weather.current.wind_speed)}mph</span>
          <span>Visibility: {weather.current.visibility}</span>
        </StyledSummary>
      </StyledGlassContainer>

      <StyledGlassContainer>
        <Image
          src="/weather-icons/weather-station.svg"
          alt="Weather Station Antenna"
          height={60}
          width={60}
        />
        <StyledSummary>
          <span>Pressure: {weather.current.pressure}</span>
          <span>Humidity: {weather.current.humidity}%</span>
          <span>UV Index: {weather.current.uvi}</span>
          <span>Dew Point: {weather.current.dew_point}&#176;</span>
        </StyledSummary>
      </StyledGlassContainer>

      <StyledSunrisePanel>
        <StyledSunriseInfo>
          <Image
            src="/weather-icons/sunrise.svg"
            alt="Sunrise"
            height={50}
            width={50}
          />
          <span>Sunrise: {convertTimeToLocale(weather.current.sunrise)}</span>
        </StyledSunriseInfo>
        <StyledSunriseInfo>
          <Image
            src="/weather-icons/sunset.svg"
            alt="Sunset"
            height={50}
            width={50}
          />
          <span>Sunset: {convertTimeToLocale(weather.current.sunset)}</span>
        </StyledSunriseInfo>
      </StyledSunrisePanel>
    </StyledCurrentConditionsContainer>
  );
}
