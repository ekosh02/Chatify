import React, {useState, createContext} from 'react';

export const GlobalContext = createContext([]);

const ContextProvider = ({children}) => {

  const [token, setToken] = useState(null);

  console.log('RENDER CONTEXT', token)
  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
