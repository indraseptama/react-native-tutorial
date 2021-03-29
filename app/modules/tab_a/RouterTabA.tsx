import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export const TabAStackNav = createStackNavigator(
  {
    Page1: Page1,
    Page2: Page2,
  },
  {initialRouteName: 'Page1'},
);
