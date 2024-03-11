/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC } from 'react';
import { AllAnime, AnimeDetails } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './navigation';



const RootStack = createStackNavigator<RootStackParamList>();


const App: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={AllAnime} />
        <RootStack.Screen name="AnimeDetails" component={AnimeDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
