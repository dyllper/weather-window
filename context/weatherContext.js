import { createContext, useContext, useReducer } from 'react';

const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext();

const WeatherActions = {
  SET_WEATHER: 'SET_WEATHER',
  SET_ERROR: 'SET_ERROR',
};

const WeatherReducer = (state, action) => {
  switch (action.type) {
    case WeatherActions.SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case WeatherActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  weather: null,
  error: null,
};

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, initialState);
  return (
    <WeatherStateContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherStateContext.Provider>
  );
};

function useWeatherState() {
  const context = useContext(WeatherStateContext);
  if (context === undefined) {
    throw new Error('useLocationState must be used within a LocationProvider');
  }
  return context;
}

function useWeatherDispatch() {
  const context = useContext(WeatherDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useLocationDispatch must be used within a LocationProvider'
    );
  }
  return context;
}

function useWeather() {
  return [useWeatherState(), useWeatherDispatch()];
}

export {
  WeatherActions,
  WeatherProvider,
  useWeather,
  useWeatherState,
  useWeatherDispatch,
};
