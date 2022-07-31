import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./pages/Home";
import StartMap from "./pages/StarMap";
import DailyPic from "./pages/DailyPic";
import SpaceCraft from "./pages/SpaceCraft";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StarMap" component={StartMap} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}