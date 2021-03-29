import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

const Page3 = ({navigation}: {navigation: NavigationScreenProp<any, any>}) => {
  return (
    <View>
      <Text>Page 3</Text>
      <Button
        onPress={() => navigation.navigate('Page4', {params: 'Dari Page 3'})}
        title="Go to Page 4"
      />
    </View>
  );
};

export default Page3;
