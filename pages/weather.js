import Image from 'next/image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import GlassPanel from '../components/GlassPanel';

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

const StyledCurrentConditionsContainer = styled.section`
  height: 30rem;
  width: 70rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: var(--spacing-md);
`;

const StyledForecastContainer = styled.section`
  height: 20rem;
  width: 70rem;
  display: flex;
  gap: 1.5rem;
`;

const StyledTemp = styled.span`
  font-weight: bold;
  color: ${(props) =>
    props.tempType === 'high'
      ? 'var(--color-orange)'
      : 'var(--color-blue-dark)'};
`;

export default function Weather() {
  return (
    <Layout bgImage="rain" title={`Weather for city name`}>
      <StyledContainer>
        <h1>Weather Window</h1>
        <h2>city name</h2>
        <h3>Wed 01-27</h3>

        <StyledCurrentConditionsContainer>
          <GlassPanel height="14.5rem" width="34.5rem" flexDir="row">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
          <GlassPanel height="14.5rem" width="34.5rem" flexDir="row">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
          <GlassPanel height="14.5rem" width="34.5rem" flexDir="row">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
          <GlassPanel height="14.5rem" width="34.5rem" flexDir="row">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
        </StyledCurrentConditionsContainer>

        <StyledForecastContainer>
          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <p>Thu 01-28</p>
            <Image
              src="/weather-icons/partly-cloudy-day.svg"
              alt="Partly Cloudy"
              height={75}
              width={75}
            />
            <p>Partly Cloudy</p>
            <p>
              <StyledTemp tempType="high">48</StyledTemp> /{' '}
              <StyledTemp tempType="low">34</StyledTemp> F
            </p>
            <p>Precip: 10%</p>
          </GlassPanel>

          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <p>Fri 01-29</p>
            <Image
              src="/weather-icons/cloudy.svg"
              alt="Cloudy"
              height={75}
              width={75}
            />
            <p>Cloudy</p>
            <p>
              <StyledTemp tempType="high">59</StyledTemp> /{' '}
              <StyledTemp tempType="low">50</StyledTemp> F
            </p>
            <p>Precip: 10%</p>
          </GlassPanel>

          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <p>Sat 01-30</p>
            <Image
              src="/weather-icons/rain.svg"
              alt="Rain"
              height={75}
              width={75}
            />
            <p>Rain</p>
            <p>
              <StyledTemp tempType="high">64</StyledTemp> /{' '}
              <StyledTemp tempType="low">36</StyledTemp> F
            </p>
            <p>Precip: 10%</p>
          </GlassPanel>

          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <p>Sun 01-31</p>
            <Image
              src="/weather-icons/clear-day.svg"
              alt="Clear"
              height={75}
              width={75}
            />
            <p>Clear</p>
            <p>
              <StyledTemp tempType="high">52</StyledTemp> /{' '}
              <StyledTemp tempType="low">30</StyledTemp> F
            </p>
            <p>Precip: 10%</p>
          </GlassPanel>

          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <p>Mon 02-01</p>
            <Image
              src="/weather-icons/clear-night.svg"
              alt="Clear"
              height={75}
              width={75}
            />
            <p>Clear</p>
            <p>
              <StyledTemp tempType="high">54</StyledTemp> /{' '}
              <StyledTemp tempType="low">37</StyledTemp> F
            </p>
            <p>Precip: 10%</p>
          </GlassPanel>
        </StyledForecastContainer>
      </StyledContainer>
    </Layout>
  );
}
