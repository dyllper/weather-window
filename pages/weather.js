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
`;

const StyledTitle = styled.h1`
  font-size: var(--font-title);
  font-weight: bold;
  margin-bottom: var(--spacing-md);
`;

const StyledHeading = styled.h2`
  font-size: var(--font-xlg);
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: var(--spacing-sm);
`;

const StyledCurrentDate = styled.h3`
  font-size: var(--font-md);
  font-weight: normal;
  margin-bottom: var(--spacing-lg);
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

const StyledSmallText = styled.small`
  font-size: var(--font-sm);
`;

const StyledSpan = styled.span`
  font-size: var(--font-default);
`;

const StyledHighLowContainer = styled.div`
  font-size: var(--font-default);
  color: var(--color-text);
`;

const StyledHighTemp = styled.span`
  font-size: var(--font-default);
  color: var(--color-orange);
`;

const StyledLowTemp = styled.span`
  font-size: var(--font-default);
  color: var(--color-blue-dark);
`;

const StyledPrecipChance = styled.span`
  font-size: var(--font-sm);
`;

export default function Weather() {
  return (
    <Layout bgImage="rain" title={`Weather for city name`}>
      <StyledContainer>
        <StyledTitle>Weather Window</StyledTitle>
        <StyledHeading>city name</StyledHeading>
        <StyledCurrentDate>Sat 01-23</StyledCurrentDate>

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
            <StyledSmallText>Sun 01-24</StyledSmallText>
            <StyledSpan>Partly Cloudy</StyledSpan>
            <StyledHighLowContainer>
              <StyledHighTemp>64</StyledHighTemp> /{' '}
              <StyledLowTemp>45</StyledLowTemp> F
            </StyledHighLowContainer>
            <StyledPrecipChance>Precip: 10%</StyledPrecipChance>
          </GlassPanel>
          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
          <GlassPanel height="20rem" width="12.8rem" flexDir="column">
            <div>Test</div>
            <div>Another test</div>
          </GlassPanel>
        </StyledForecastContainer>
      </StyledContainer>
    </Layout>
  );
}
