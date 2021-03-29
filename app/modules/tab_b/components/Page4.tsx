import React from 'react';
import {Text, View} from 'react-native';

import {NavigationScreenProp} from 'react-navigation';
const Page4 = ({navigation}: {navigation: NavigationScreenProp<any, any>}) => {
  return (
    <View>
      <Text>{navigation.state['params']['params']}</Text>
    </View>
  );
};

export default Page4;
