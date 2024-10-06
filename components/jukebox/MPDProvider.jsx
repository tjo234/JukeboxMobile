import { createContext, useReducer } from 'react';

export const MPDContext = createContext(null);
export const MPDDispatchContext = createContext(null);

export function MPDProvider({ children }) {
  const [server, dispatch] = useReducer(
    serverReducer,
    defaultServer
  );

  return (
    <MPDContext.Provider value={server}>
      <MPDDispatchContext.Provider value={dispatch}>
        {children}
      </MPDDispatchContext.Provider>
    </MPDContext.Provider>
  );
}

export function useMPD() {
  return useContext(MPDContext);
}

export function useMPDDispatch() {
  return useContext(MPDDispatchContext);
}

function serverReducer(server, action) {
  switch (action.type) {
    case 'updated': {
      return server;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const defaultServer = 'raspberrypi.local:6600';
