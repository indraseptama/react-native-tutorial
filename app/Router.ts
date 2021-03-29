import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabAStackNav } from './modules/tab_a/RouterTabA';
import { TabBStackNav } from './modules/tab_b/RouterTabB';

export const RouterApp = createAppContainer(createBottomTabNavigator(
    {
      TabA: {
        screen: TabAStackNav,
      },
      TabB: {
        screen: TabBStackNav,
      },
    },
    {
        initialRouteName: "TabA"
    }
  ));