import styled from 'styled-components';

import ForecastPanel from '../ForecastPanel';

const StyledForecastContainer = styled.section`
  height: 20rem;
  width: 70rem;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
    align-self: center;
  }
`;

const StyledPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;

export default function Forecast({ forecastArray, measurementUnit }) {
  //The first entry in the array is for the current day's weahter, which we don't want to include in the forecast.
  const fiveDayForecast = forecastArray.slice(1, 6);
  return (
    <StyledForecastContainer>
      <h3>5 Day Forecast</h3>
      <StyledPanelContainer>
        {fiveDayForecast.map((forecast) => (
          <ForecastPanel
            key={forecast.dt}
            forecast={forecast}
            measurementUnit={measurementUnit}
          />
        ))}
      </StyledPanelContainer>
    </StyledForecastContainer>
  );
}
