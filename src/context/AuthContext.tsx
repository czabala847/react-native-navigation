import React from 'react';
import {createContext} from 'react';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface Props {
  children: JSX.Element;
}

export const AuthProvider = ({children}: Props) => {
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
