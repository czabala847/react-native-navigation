import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {LateralMenuNavigator} from './src/navigator/LateralMenuNavigator';
import {LateralCustomMenu} from './src/navigator/LateralCustomMenu';
// import {StackNavigator} from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <LateralMenuNavigator /> */}
      <LateralCustomMenu />
    </NavigationContainer>
  );
};
