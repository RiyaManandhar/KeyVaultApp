import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorContainer from './src/models/StackNavigatorContainer';

export default function App() {
  return (
    <NavigationContainer>
  
      <StackNavigatorContainer/>
   
    </NavigationContainer>
  );
}