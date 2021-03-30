import React, {Component} from 'react';
import ViewContainer from './app/bootstrap/ViewContainer';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
const App = () => {
  const scheme = useColorScheme();
  console.log(scheme === 'dark');
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'red',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? MyTheme : DefaultTheme}>
        <ViewContainer />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
