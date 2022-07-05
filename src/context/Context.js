import React, {useContext, useState, createContext} from 'react';

export const GlobalContext = createContext([]);

const ContextProvider = ({children}) => {
  console.log('REDNDER ContextProvider')
  const [token, setToken] = useState(null);
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
