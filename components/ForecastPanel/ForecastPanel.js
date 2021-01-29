import Image from 'next/image';
import styled from 'styled-components';

import GlassPanel from '../GlassPanel';

const StyledForecastPanel = styled(GlassPanel)`
  height: 20rem;
  width: 12.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  padding: 1rem 0.8rem;
`;

const StyledCondition = styled.p`
  margin-top: -0.8rem;
`;

const StyledTemp = styled.span`
  font-weight: bold;
  color: ${(props) =>
    props.tempType === 'high'
      ? 'var(--color-orange)'
      : 'var(--color-blue-dark)'};
`;

export default function ForecastPanel() {
  return (
    <StyledForecastPanel>
      <p>Fri 01-29</p>
      <Image
        src="/weather-icons/cloudy.svg"
        alt="Cloudy"
        height={75}
        width={75}
      />
      <StyledCondition>Cloudy</StyledCondition>
      <p>
        <StyledTemp tempType="high">59</StyledTemp> /{' '}
        <StyledTemp tempType="low">50</StyledTemp> &#176;F
      </p>
      <p>Precip: 10%</p>
    </StyledForecastPanel>
  );
}
