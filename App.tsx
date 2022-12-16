import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {LateralMenuNavigator} from './src/navigator/LateralMenuNavigator';
import {LateralCustomMenu} from './src/navigator/LateralCustomMenu';
import {AuthProvider} from './src/context/AuthContext';
// import {StackNavigator} from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <LateralMenuNavigator /> */}
        <LateralCustomMenu />
      </AppState>
    </NavigationContainer>
  );
};

interface Props {
  children: JSX.Element;
}

const AppState = ({children}: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};
