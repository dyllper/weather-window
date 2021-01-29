import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../components/Layout';

const StyledContainer = styled.main`
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
    text-align: center;
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

  p {
    font-size: var(--font-sm);
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  label {
    font-size: var(--font-md);
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    height: 4rem;
    width: 50rem;
    border: 1px solid #000000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: var(--font-default);
  }
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

  const handleClick = () => {
    //do some stuff getting/setting values based on user input/geolocation stuff
    router.push('/weather');
  };

  return (
    <Layout title="Weather Window">
      <StyledContainer>
        <StyledTitleContainer>
          <h1>Weather Window</h1>
          <p>Your Virtual Glimpse at the Weather</p>
        </StyledTitleContainer>
        <p>
          This app makes use of your browser's geolocation capabilities. <br />
          If you aren't comfortable allowing that kind of access, or want to
          check the weather somewhere other than where you are at now, you can
          search by City name below.
        </p>
        <StyledInputContainer>
          <label htmlFor="city-input">Your City</label>
          <input type="text" id="city-input" placeholder="Enter a city name" />
        </StyledInputContainer>
        <StyledButton onClick={handleClick}>Open the Window</StyledButton>
      </StyledContainer>
    </Layout>
  );
}
