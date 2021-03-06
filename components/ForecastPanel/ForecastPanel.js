import styled from 'styled-components';
import { motion } from 'framer-motion';

import GlassPanel from '../GlassPanel';

import { convertDateToLocale } from '../../utilities/dateUtils';
import { getPathForWeatherIcon } from '../../utilities/iconUtils';

const StyledForecastPanel = styled(motion.custom(GlassPanel))`
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

export default function ForecastPanel({ forecast, measurementUnit, duration }) {
  return (
    <StyledForecastPanel
      transition={{ ease: 'easeInOut', duration: duration, delay: 1.25 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p>{convertDateToLocale(forecast.dt)}</p>
      <img
        src={getPathForWeatherIcon(forecast.weather[0].icon)}
        alt={forecast.weather[0].main}
        height="75"
        width="75"
      />
      <StyledCondition>{forecast.weather[0].main}</StyledCondition>
      <p>
        <StyledTemp tempType="high">{Math.ceil(forecast.temp.max)}</StyledTemp>{' '}
        / <StyledTemp tempType="low">{Math.ceil(forecast.temp.min)}</StyledTemp>{' '}
        &#176;{measurementUnit === 'imperial' ? 'F' : 'C'}
      </p>
      <p>
        Precip:{' '}
        {forecast.rain
          ? Math.ceil(forecast.rain)
          : forecast.snow
          ? Math.ceil(forecast.snow)
          : '0'}
        %
      </p>
    </StyledForecastPanel>
  );
}
