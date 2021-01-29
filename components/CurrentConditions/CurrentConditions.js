import Image from 'next/image';
import styled from 'styled-components';

import GlassPanel from '../GlassPanel';

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
  return (
    <StyledCurrentConditionsContainer>
      <StyledGlassContainer>
        <StyledCurrentTemp>
          48<small> &#176;F</small>
        </StyledCurrentTemp>
        <StyledTempSummary>
          <p>
            Feels Like: <span>46</span>&#176;
          </p>
          <p>
            Low: <span>46</span>&#176;
          </p>
        </StyledTempSummary>
      </StyledGlassContainer>

      <StyledGlassContainer>
        <Image
          src="/weather-icons/clear-day.svg"
          alt="Clear"
          height={130}
          width={130}
        />
        <StyledSummary>
          <span>Sunny</span>
          <span>Clouds: 0%</span>
          <span>Wind: 3mph</span>
          <span>Visibility: 6 miles</span>
        </StyledSummary>
      </StyledGlassContainer>

      <StyledGlassContainer>
        <Image
          src="/weather-icons/weather-station.svg"
          alt="Clear"
          height={60}
          width={60}
        />
        <StyledSummary>
          <span>Pressure: 10</span>
          <span>Humidity: 1%</span>
          <span>UV Index: 0</span>
          <span>Dew Point: 33.53&#176;</span>
        </StyledSummary>
      </StyledGlassContainer>

      <StyledSunrisePanel>
        <StyledSunriseInfo>
          <Image
            src="/weather-icons/sunrise.svg"
            alt="Clear"
            height={50}
            width={50}
          />
          <span>Sunrise: 6:13 AM</span>
        </StyledSunriseInfo>
        <StyledSunriseInfo>
          <Image
            src="/weather-icons/sunset.svg"
            alt="Clear"
            height={50}
            width={50}
          />
          <span>Sunset: 6:13 AM</span>
        </StyledSunriseInfo>
      </StyledSunrisePanel>
    </StyledCurrentConditionsContainer>
  );
}
