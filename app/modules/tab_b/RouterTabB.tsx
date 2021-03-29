import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

export const TabBStackNav = createStackNavigator(
  {
    Page3: Page3,
    Page4: Page4,
  },
  {initialRouteName: 'Page3'},
);
