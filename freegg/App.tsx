import React from 'react';
import { useEffect, useState } from 'react';
import { getAllGames } from './services/api/request/request';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home' 
import Details from './pages/Details';


const Stack = createNativeStackNavigator()
const NavSack = createBottomTabNavigator()

export default function App() {
  return (
  
  <NavigationContainer>
    <NavSack.Navigator>
      <NavSack.Screen name ="home" component={Home} />
      <NavSack.Screen name ="details" component={Details} />
    </NavSack.Navigator>
  </NavigationContainer>

  );
}


