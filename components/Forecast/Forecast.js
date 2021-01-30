import styled from 'styled-components';

import ForecastPanel from '../ForecastPanel';

const StyledForecastContainer = styled.section`
  height: 20rem;
  width: 70rem;
  display: flex;
  gap: 1.5rem;
`;

const testArray = [1, 2, 3, 4, 5];

export default function Forecast({ forecastArray }) {
  forecastArray.splice(-3);
  return (
    <StyledForecastContainer>
      {forecastArray.map((forecast) => (
        <ForecastPanel key={forecast.dt} forecast={forecast} />
      ))}
    </StyledForecastContainer>
  );
}
