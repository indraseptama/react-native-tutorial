import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationScreenProp} from 'react-navigation';

const Page1 = ({navigation}: {navigation: NavigationScreenProp<any, any>}) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Text>Page 1</Text>
      <Button
        onPress={() => navigation.navigate('Page2')}
        title="Go to Page 2"
      />
    </View>
  );
};

export default Page1;
