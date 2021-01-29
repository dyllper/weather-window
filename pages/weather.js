import Image from 'next/image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import CurrentConditions from '../components/CurrentConditions';
import Forecast from '../components/Forecast';

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
  return (
    <Layout bgImage="rain" title={`Weather for city name`}>
      <StyledContainer>
        <h1>Weather Window</h1>
        <h2>city name</h2>
        <h3>Wed 01-27</h3>

        <CurrentConditions />

        <Forecast />
      </StyledContainer>
    </Layout>
  );
}
