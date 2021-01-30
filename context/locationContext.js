import { createContext, useContext, useReducer } from 'react';

const LocationStateContext = createContext();
const LocationDispatchContext = createContext();

const LocationActions = {
  SET_CITY: 'SET_CITY',
  SET_COORDS: 'SET_COORDS',
  SET_ERROR: 'SET_ERROR',
};

const LocationReducer = (state, action) => {
  switch (action.type) {
    case LocationActions.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case LocationActions.SET_COORDS:
      return {
        ...state,
        coords: action.payload,
      };
    case LocationActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  city: null,
  coords: null,
  error: null,
};

const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState);
  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
};

function useLocationState() {
  const context = useContext(LocationStateContext);
  if (context === undefined) {
    throw new Error('useLocationState must be used within a LocationProvider');
  }
  return context;
}

function useLocationDispatch() {
  const context = useContext(LocationDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useLocationDispatch must be used within a LocationProvider'
    );
  }
  return context;
}

function useLocation() {
  return [useLocationState(), useLocationDispatch()];
}

export {
  LocationActions,
  LocationProvider,
  useLocation,
  useLocationState,
  useLocationDispatch,
};
