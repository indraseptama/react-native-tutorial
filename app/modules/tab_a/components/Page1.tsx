import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

const Page1 = ({navigation}: {navigation: NavigationScreenProp<any, any>}) => {
  return (
    <View>
      <Text>Page 1</Text>
      <Button
        onPress={() => navigation.navigate('Page2')}
        title="Go to Page 2"
      />
    </View>
  );
};

export default Page1;
